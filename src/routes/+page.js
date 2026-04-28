import Project from '$lib/content/project.js';

export async function load() {
    // Prima prova: carica i markdown (dev mode)
    const modules = import.meta.glob('../lib/content/projects/**/*.md', { eager: true });
    let projects = Object.entries(modules).map(([path, mod]) => {
        const slug = path.split('/').at(-1).slice(0, -3);
        return { slug, ...mod.metadata };
    });

    // Fallback: se non trova nulla (ad es. import.meta.glob non risolve), costruisci una lista dalle immagini static
    if (!projects || projects.length === 0) {
        try {
            const fs = await import('fs');
            const path = await import('path');
            const imagesRoot = path.resolve('static/images/projects');
            const categories = fs.readdirSync(imagesRoot, { withFileTypes: true })
                .filter(d => d.isDirectory())
                .map(d => d.name);

            projects = [];
            for (const cat of categories) {
                const catPath = path.join(imagesRoot, cat);
                // dive one level deeper if needed
                const entries = fs.readdirSync(catPath, { withFileTypes: true });
                for (const e of entries) {
                    if (e.isDirectory()) {
                        const inner = fs.readdirSync(path.join(catPath, e.name));
                        for (const img of inner) {
                            if (img.match(/\.(jpe?g|png|webp|gif)$/i)) {
                                projects.push({
                                    slug: `${cat}/${e.name}/${img}`,
                                    thumbnail: `/images/projects/${cat}/${e.name}/${img}`,
                                    category: cat
                                });
                            }
                        }
                    } else if (e.isFile() && e.name.match(/\.(jpe?g|png|webp|gif)$/i)) {
                        projects.push({
                            slug: `${cat}/${e.name}`,
                            thumbnail: `/images/projects/${cat}/${e.name}`,
                            category: cat
                        });
                    }
                }
            }
        } catch (err) {
            // ignore and return empty projects
            projects = [];
        }
    }

    return { projects };
}