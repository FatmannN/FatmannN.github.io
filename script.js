// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Removed scroll event for nav background to keep it always dark

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Add current year to footer
document.querySelector('footer p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Tirth Patel. All rights reserved.`;

// Add JavaScript function to toggle experience details on arrow click for collapsible experience sections
function toggleExperienceDetails(summaryElem) {
    const details = summaryElem.parentElement.querySelector('.timeline-details');
    const arrow = summaryElem.querySelector('.arrow');
    const showMoreText = summaryElem.querySelector('.show-more-text');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        if (arrow) arrow.classList.add('expanded');
        if (showMoreText) showMoreText.textContent = 'Show Less';
    } else {
        details.style.display = 'none';
        if (arrow) arrow.classList.remove('expanded');
        if (showMoreText) showMoreText.textContent = 'Show More';
    }
}