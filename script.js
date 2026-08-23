document.addEventListener('DOMContentLoaded', () => {

    // --- Filtres portfolio ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            portfolioCards.forEach(card => {
                card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter)
                    ? 'flex' : 'none';
            });
        });
    });

    // --- Liens actifs dans la nav ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --- Menu hamburger ---
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Ferme le menu automatiquement après un clic sur un lien (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

});

document.addEventListener('DOMContentLoaded', () =>{
    const emailBtn = document.getElementById('email-link');
    if (emailBtn){
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const user = emailBtn.getAttribute('data-user');
            const domain = emailBtn.getAttribute('data-domain');
            const fullEmail = `${user}@${domain}`;
            // ouvre le lien client pour le mettre à jour
            window.location.href = `mailto:${fullEmail}`;
            emailBtn.textContent = fullEmail;

        });
    }
});