export default class Project {
    static all() {
        // Controlla bene che il percorso sia: /src/lib/content/projects/**/*.md
        const modules = import.meta.glob('/src/lib/content/projects/**/*.md', { eager: true });

        const projects = Object.entries(modules).map(([path, mod]) => {
            const slug = path.split('/').at(-1).slice(0, -3);
            return { slug, ...mod.metadata };
        });

        // Ordina i progetti: prima per anno (decrescente) e poi per titolo (alfabetico)
        return projects.sort((a, b) => {
            const yearA = a.year ?? a.date?.year ?? 0;
            const yearB = b.year ?? b.date?.year ?? 0;

            if (yearA !== yearB) return yearB - yearA;

            const titleA = (a.title || '').toLowerCase();
            const titleB = (b.title || '').toLowerCase();

            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;

            return 0;
        });
    }

    /**
     * Raggruppa i progetti per anno
     */
    static async byYear() {
        const projects = this.all();
        const result = [];

        for (const project of projects) {
            const year = project.year ?? project.date?.year ?? 'Unknown';

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