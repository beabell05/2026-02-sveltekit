export default class Project {
    /**
     * Recupera tutti i progetti dalla cartella content e li ordina
     */
    static all() {
        // Importa tutti i file .md nella cartella projects
        const modules = import.meta.glob('/src/content/projects/**/*.md', { eager: true });
        
        const projects = Object.entries(modules).map(([path, mod]) => {
            // Estrae lo slug dal nome del file (es. "mio-progetto.md" -> "mio-progetto")
            const slug = path.split('/').at(-1).slice(0, -3);
            
            // Unisce lo slug ai metadati (frontmatter) del file markdown
            return { 
                slug, 
                ...mod.metadata ?? mod.frontmatter ?? {} 
            };
        });

        // Ordina i progetti: prima per anno (decrescente) e poi per titolo (alfabetico)
        return projects.sort((a, b) => {
            const yearA = a.year ?? a.date?.year ?? 0;
            const yearB = b.year ?? b.date?.year ?? 0;
            
            if (yearA > yearB) return -1;
            if (yearA < yearB) return 1;

            const titleA = a.title?.toLowerCase() || "";
            const titleB = b.title?.toLowerCase() || "";
            
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
            
            // Cerca se esiste già un gruppo per quell'anno
            let group = result.find((g) => g.number === year);
            
            if (!group) {
                group = { number: year, projects: [] };
                result.push(group);
            }
            
            // Aggiunge il progetto al gruppo dell'anno corrispondente
            group.projects.push(project);
        }
        
        return result;
    }
}