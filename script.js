document.addEventListener("DOMContentLoaded", () => {
    // Fetch public repos from your GitHub and display the 6 most recently updated as project cards
    fetch("https://api.github.com/users/GREYsaurus/repos?sort=updated")
        .then(response => response.json())
        .then(repos => {
            const projectsList = document.getElementById('projects-list');
            projectsList.innerHTML = ""; // Clear any static projects

            // Filter out forks and archived, then take the top 6
            const recentRepos = repos.filter(repo => !repo.fork && !repo.archived).slice(0, 6);

            recentRepos.forEach((repo, i) => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description ? repo.description : "No description provided."}</p>
                    <p style="font-size:0.9em;color:#888;margin:0.5em 0 0.5em 0;">
                        Updated: ${new Date(repo.updated_at).toLocaleDateString()}
                    </p>
                    <a href="${repo.html_url}" target="_blank">View Project</a>
                `;
                // Fade-in animation with staggered delay
                card.style.opacity = 0;
                card.style.transform = "translateY(40px)";
                card.style.transition = "opacity 0.7s, transform 0.7s";
                setTimeout(() => {
                    card.style.opacity = 1;
                    card.style.transform = "translateY(0)";
                }, 300 + i * 120);
                projectsList.appendChild(card);
            });
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
            header.style.boxShadow = "0 4px 24px #ffbc4244";
        } else {
            header.style.boxShadow = "none";
        }
    });
});