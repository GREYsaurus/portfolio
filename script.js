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
    projects.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        // Add fade-in animation with staggered delay
        card.style.opacity = 0;
        card.style.transform = "translateY(40px)";
        card.style.transition = "opacity 0.7s, transform 0.7s";
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, 300 + i * 200);
        projectsList.appendChild(card);
    });

    // Animate nav links on load
    document.querySelectorAll('nav a').forEach((link, i) => {
        link.style.opacity = 0;
        setTimeout(() => {
            link.style.transition = "opacity 0.7s";
            link.style.opacity = 1;
        }, 400 + i * 200);
    });

    // Add a subtle header glow on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = "0 4px 24px #00e0ff55";
        } else {
            header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
        }
    });
});