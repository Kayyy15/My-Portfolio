document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('home');
    // Trigger the hero section animation immediately on page load
    setTimeout(() => {
        heroSection.classList.add('active');
    }, 100); // Small delay to ensure CSS is applied before animation

    // only the sections that should animate on scroll
    const scrollAnimatedSections = document.querySelectorAll('#about, #projects, #contact');

    // new Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    // Observe each section that should animate on scroll
    scrollAnimatedSections.forEach(section => {
        observer.observe(section);
    });

    const contactForm = document.querySelector('.contact-form');
    const sendButton = document.querySelector('.send-button');
    const iconWrapper = document.querySelector('.icon-wrapper');

    contactForm.addEventListener('submit', (e) => {
        // Prevent the form from submitting immediately
        e.preventDefault();

        // Start the fly-out animation
        iconWrapper.classList.add('flying');

        // After the animation completes, submit the form
        setTimeout(() => {
            contactForm.submit();
        }, 800); // Wait for the animation to finish (0.8s)
    });
    const nameGlow = document.querySelector('.name-glow');

    if (nameGlow) {
        nameGlow.addEventListener('mousemove', (e) => {
            const rect = nameGlow.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            nameGlow.style.setProperty('--x-pos', `${x}px`);
            nameGlow.style.setProperty('--y-pos', `${y}px`);
        });
    }
});

