document.addEventListener("DOMContentLoaded", function() {
    const contentSections = document.querySelectorAll('.content');

    contentSections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    });
});
