document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('home');
    // Trigger the hero section animation immediately on page load
    setTimeout(() => {
        heroSection.classList.add('active');
    }, 100); // Small delay to ensure CSS is applied before animation

    // Select only the sections that should animate on scroll
    const scrollAnimatedSections = document.querySelectorAll('#about, #projects, #contact');

    // Create a new Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class when the section enters the viewport
                entry.target.classList.add('active');
                // Stop observing once the animation has been triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the section is visible
    });

    // Observe each section that should animate on scroll
    scrollAnimatedSections.forEach(section => {
        observer.observe(section);
    });
});