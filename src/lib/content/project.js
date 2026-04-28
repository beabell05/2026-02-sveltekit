export default class Project {
    static all() {
        // Cerca i file markdown dentro src/lib/content/projects/
        const modules = import.meta.glob('/src/lib/content/projects/**/*.md', { eager: true });

        const projects = Object.entries(modules).map(([path, mod]) => {
            return {
                slug: path.split('/').at(-1).slice(0, -3),
                ...mod.metadata
            };
        });

        return projects.sort((a, b) => (b.year || 0) - (a.year || 0));
    }
}