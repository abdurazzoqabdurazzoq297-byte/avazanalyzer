document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in, .scroll-reveal');
    fadeElements.forEach(el => observer.observe(el));

    // Initially trigger visible on load for elements at the top
    setTimeout(() => {
        const initialElements = document.querySelectorAll('.hero.fade-in');
        initialElements.forEach(el => el.classList.add('visible'));
    }, 100);
});
