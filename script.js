// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Hero CTA Button Functionality
const workWithUsBtn = document.querySelector('.hero-ctas .btn-primary');
const learnMoreBtn = document.querySelector('.hero-ctas .btn-secondary');

if (workWithUsBtn) {
    workWithUsBtn.addEventListener('click', () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Simple validation
        if (name && email && message) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #C9A84C;
                color: #0A0A0A;
                padding: 1.5rem 2rem;
                border-radius: 4px;
                font-weight: 600;
                z-index: 10000;
                animation: slideInDown 0.5s ease-out;
            `;
            successMsg.textContent = `Thank you, ${name}! We've received your message.`;
            document.body.appendChild(successMsg);
            
            // Remove success message after 4 seconds
            setTimeout(() => {
                successMsg.style.animation = 'slideInUp 0.5s ease-out forwards';
                setTimeout(() => successMsg.remove(), 500);
            }, 3500);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Smooth scroll for navigation links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and audience cards (no division card animation)
const elementsToObserve = document.querySelectorAll(
    '.service-item, .audience-card, .mission-item'
);

elementsToObserve.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Active navigation highlight based on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        const href = item.getAttribute('href').slice(1);
        if (href === current) {
            item.style.color = '#C9A84C';
            item.style.fontWeight = '700';
        } else {
            item.style.color = '';
            item.style.fontWeight = '500';
        }
    });
});

// Button click ripple effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Smooth fade in on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// CTA button interactions
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-primary-large').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Get In Touch button functionality
const getInTouchBtn = document.querySelector('.cta-section .btn-primary-large');
if (getInTouchBtn) {
    getInTouchBtn.addEventListener('click', () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Lazy load images when they come into view (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Logo animations on scroll
const logoObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const logoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animationPlayState = 'running';
            }, index * 100);
        }
    });
}, logoObserverOptions);

// Observe division card logos for staggered animation
const divisionLogos = document.querySelectorAll('.division-logo');
divisionLogos.forEach((logo, index) => {
    logo.style.animationDelay = `${index * 0.2}s`;
    logoObserver.observe(logo);
});

// Add hover glow effect to logos (removed rotation animations)
document.querySelectorAll('.division-logo-svg').forEach(logo => {
    // Removed hover rotation animations
});

// Add subtle bounce to logos on page load
window.addEventListener('load', () => {
    const navLogo = document.querySelector('.nav-logo-svg');
    if (navLogo) {
        navLogo.style.animation = 'logoPulse 2s ease-in-out infinite, logoFloat 3s ease-in-out infinite';
    }
});

// Contact logo parallax effect
window.addEventListener('scroll', () => {
    const contactLogo = document.querySelector('.contact-logo-svg');
    if (contactLogo && contactLogo.closest('.contact')) {
        const contactSection = contactLogo.closest('.contact');
        const rect = contactSection.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollPercent > 0 && scrollPercent < 1) {
            contactLogo.style.transform = `rotate(${scrollPercent * 360}deg) scale(${0.8 + scrollPercent * 0.4})`;
        }
    }
});

console.log('The Content Company - Building Africa\'s creative economy.');
