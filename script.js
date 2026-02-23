// Fade-in on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
});

// Initial trigger عند تحميل الصفحة
window.addEventListener('load', () => {
    sections.forEach(section => section.classList.add('show'));
});