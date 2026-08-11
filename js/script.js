// Sarah Richardson Psychotherapy - JavaScript

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close the mobile menu before scrolling so its expanded height
            // does not distort the final destination.
            closeMobileMenu();

            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

function closeMobileMenu() {
    if (!navMenu || !mobileToggle) return;
    navMenu.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Open navigation menu');
}

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
        mobileToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    document.addEventListener('click', (event) => {
        if (navMenu.classList.contains('active') && !navbar.contains(event.target)) {
            closeMobileMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 860) closeMobileMenu();
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.setAttribute('tabindex', '0');
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');

    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });

    question.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            question.click();
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const contactMethod = document.querySelector('input[name="contact-method"]:checked').value;
        const message = document.getElementById('message').value.trim();
        const subject = `Consultation request from ${name}`;
        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || 'Not provided'}`,
            `Preferred contact method: ${contactMethod}`,
            '',
            message
        ].join('\n');

        window.location.href = `mailto:sarahrichardsonpsychotherapy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

// Parallax removed — background-attachment: fixed is broken on iOS Safari
// Using static background-position: center instead

// Add loaded class to body when page is fully loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Make first section visible immediately
    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.classList.add('visible');
    }
});
