export default class Project {
    static all() {
        const modules = import.meta.glob('./projects/**/*.md', { eager: true });
        const projects = Object.entries(modules).map(([path, mod]) => {
            const slug = path.split('/').pop().slice(0, -3);
            const data = mod.metadata ?? mod.frontmatter ?? {};
            return { slug, data };
        });

        return projects.sort((a, b) => {
            const yearA = a.data.year ?? 0;
            const yearB = b.data.year ?? 0;
            if (yearA > yearB) return -1;
            if (yearA < yearB) return 1;

            const titleA = (a.data.title || '').toUpperCase();
            const titleB = (b.data.title || '').toUpperCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });
    }

    static byYear() {
        const projects = this.all();
        const result = [];
        for (const project of projects) {
            const year = project.data.year ?? 'Unknown';
            let group = result.find((g) => g.number === year);
            if (!group) {
                group = { number: year, projects: [] };
                result.push(group);
            }
            group.projects.push(project);
        }
        return result;
    }
}