// Sarah Richardson Psychotherapy - JavaScript

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
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
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            contactMethod: document.querySelector('input[name="contact-method"]:checked').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send this to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for reaching out! I will get back to you within 24-48 hours.');
        
        // Reset form
        contactForm.reset();
        
        // In production, you would integrate with:
        // - EmailJS
        // - Formspree
        // - A custom backend
        // - Google Forms API
        // Example with EmailJS:
        /*
        emailjs.send('service_id', 'template_id', formData)
            .then(() => {
                alert('Thank you for reaching out! I will get back to you within 24-48 hours.');
                contactForm.reset();
            })
            .catch((error) => {
                alert('Something went wrong. Please try emailing me directly at sarah@example.com');
                console.error('Error:', error);
            });
        */
    });
}

// Parallax effect for about hero image
window.addEventListener('scroll', () => {
    const aboutHero = document.querySelector('.about-hero-image');
    if (aboutHero) {
        const scrolled = window.pageYOffset;
        const aboutOffset = aboutHero.offsetTop;
        const rate = (scrolled - aboutOffset) * 0.5;
        
        if (scrolled > aboutOffset - window.innerHeight && scrolled < aboutOffset + aboutHero.offsetHeight) {
            aboutHero.style.backgroundPositionY = `${rate}px`;
        }
    }
});

// Add loaded class to body when page is fully loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Make first section visible immediately
    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.classList.add('visible');
    }
});

// Accessibility: Allow keyboard navigation for FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.setAttribute('tabindex', '0');
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');
    
    question.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
            question.setAttribute('aria-expanded', 
                question.parentElement.classList.contains('active') ? 'true' : 'false'
            );
        }
    });
});
