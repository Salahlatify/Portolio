const translations = {
    en: {
        'home': 'Home',
        'about': 'About',
        'projects': 'Projects',
        'contact': 'Contact',
        // Add all your text content here
    },
    fr: {
        'home': 'Accueil',
        'about': 'À propos',
        'projects': 'Projets',
        'contact': 'Contact',
        // Add all your French translations here
    }
};

document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
        const language = flag.dataset.lang;
        changeLanguage(language);
    });
});
