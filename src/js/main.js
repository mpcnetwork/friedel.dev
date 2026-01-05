import '../scss/styles.scss'

import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()

// Animations & Interactions for Friedel Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer voor scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Voeg 'animate' klasse toe aan skill cards voor progress animatie
                if (entry.target.classList.contains('skill-card')) {
                    entry.target.classList.add('animate');
                }
            }
        });
    }, observerOptions);

    // Observe alle elementen met animatie-classes
    document.querySelectorAll('.skill-card, .project-card, .testimonial-card, .timeline-card').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll voor anchor links
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

    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            this.reset();
            alert('Dank je wel! Ik neem spoedig contact met je op.');
        });
    }

    // Lightbox initialization
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'showImageNumberLabel': false,
            'alwaysShowNavOnTouchDevices': true
        });
    }

    // Add parallax effect to hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.gradient-hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Navbar highlight based on scroll position
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
