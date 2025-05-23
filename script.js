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

function toggleProjectDetails(button) {
    const details = button.nextElementSibling;
    const showMoreText = button.querySelector('.show-more-text');
    const arrow = button.querySelector('.arrow');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        showMoreText.textContent = 'Show Less';
        arrow.classList.add('expanded');
    } else {
        details.style.display = 'none';
        showMoreText.textContent = 'Show More';
        arrow.classList.remove('expanded');
    }
}

function showNextCCACImage() {
    const img = document.getElementById('ccac-main-img');
    if (img.src.includes('CCAC-Winner%201.jpg') || img.src.includes('CCAC-Winner%201.jpg'.replace(' ', '%20'))) {
        img.src = 'images/CCAC-Winner 2.jpg';
    } else {
        img.src = 'images/CCAC-Winner 1.jpg';
    }
}

// Mobile nav hamburger menu logic
const hamburger = document.getElementById('hamburger-menu');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const closeMobileNavBtn = document.getElementById('close-mobile-nav');

function openMobileNav() {
    mobileNavOverlay.style.display = 'flex';
}
function closeMobileNav() {
    mobileNavOverlay.style.display = 'none';
}

if (hamburger) {
    hamburger.addEventListener('click', openMobileNav);
}
if (closeMobileNavBtn) {
    closeMobileNavBtn.addEventListener('click', closeMobileNav);
}
// Close mobile nav when clicking outside the menu
if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', function(e) {
        if (e.target === mobileNavOverlay) {
            closeMobileNav();
        }
    });
}