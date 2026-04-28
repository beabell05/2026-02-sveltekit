import Project from '$lib/content/project.js';

export async function load() {
    const projects = Project.all();
    return {
        projects: projects || [] // Passiamo una lista vuota se non trova nulla
    };
}