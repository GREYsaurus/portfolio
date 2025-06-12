document.addEventListener("DOMContentLoaded", () => {
    // Example projects data; replace or expand as you build more!
    const projects = [
        {
            title: "Portfolio Website",
            description: "This website! Built with HTML, CSS, and JavaScript to showcase my work and skills.",
            link: "#"
        },
        {
            title: "GitHub Profile",
            description: "Explore my code and contributions on GitHub.",
            link: "https://github.com/GREYsaurus"
        }
        // Add more projects as needed
    ];

    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsList.appendChild(card);
    });
});