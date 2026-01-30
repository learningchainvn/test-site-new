document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe text and cards
    document.querySelectorAll('.card, .section-title, .hero-content > *').forEach(el => {
        el.style.opacity = 0; // Set initial opacity for JS-enabled structure
        el.classList.add('fade-in'); // Add class but wait for trigger if needed or just let CSS handle it
        observer.observe(el);
    });
});
