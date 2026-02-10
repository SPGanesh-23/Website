// Maasaathuvaan Clone Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    // Note: In a real implementation, we'd toggle a visible class on a mobile nav menu
    // For this prototype, we'll log it
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            alert('Mobile menu clicked - (Nav toggle implementation would go here)');
        });
    }

    // 2. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Maasaathuvaan Clone Loaded Successfully");
});
