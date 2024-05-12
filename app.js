document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Project Alpha', description: 'A large residential building.' },
        { name: 'Project Beta', description: 'A new bridge across the river.' },
        { name: 'Project Gamma', description: 'A commercial complex.' }
    ];

    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="p-5 bg-white shadow-md rounded">
                <h3 class="text-lg font-bold">${project.name}</h3>
                <p>${project.description}</p>
            </div>
        `;
    });
});
