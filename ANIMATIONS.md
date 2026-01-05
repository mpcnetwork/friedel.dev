/* Animation Cheat Sheet - Friedel Portfolio */

/**
 * GLOBAL ANIMATIONS (global.css)
 * ==============================
 */

/* Pulse Animation - Logo Dot */
@keyframes pulse {
    0%, 100% { box-shadow: 0 0 30px rgba(108, 92, 231, 0.6); }
    50% { box-shadow: 0 0 50px rgba(108, 92, 231, 0.8); }
}

/* Float Animation - Hero Background */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(30px); }
}

/**
 * HERO ANIMATIONS (hero.css)
 * ==========================
 */

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/**
 * ABOUT ANIMATIONS (about.css)
 * =============================
 */

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/**
 * SKILLS ANIMATIONS (skills.css)
 * ===============================
 */

@keyframes shine {
    0% { transform: translate(-100%, -100%) rotate(45deg); }
    100% { transform: translate(100%, 100%) rotate(45deg); }
}

@keyframes fillProgress {
    from { width: 0 !important; }
}

/**
 * PROJECTS ANIMATIONS (projects.css)
 * ===================================
 */

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/**
 * GALLERY ANIMATIONS (gallery.css)
 * =================================
 */

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/**
 * TIMELINE ANIMATIONS (timeline.css)
 * ===================================
 */

/* Pulse effect op timeline markers */
@keyframes timelinePulse {
    0%, 100% { box-shadow: 0 0 20px rgba(108, 92, 231, 0.5); }
    50% { box-shadow: 0 0 35px rgba(108, 92, 231, 0.8); }
}

/**
 * ANIMATE.CSS CLASSES USED
 * ========================
 */

/*
animate__animated              - Base class voor animaties
animate__fadeInDown            - Fade + Down movement
animate__fadeInUp              - Fade + Up movement
animate__slideInLeft           - Slide van links
animate__slideInRight          - Slide van rechts
animate__zoomIn                - Zoom in effect
animate__flipInY               - Flip verticaal
animate__delay-1s              - 1s delay
animate__delay-2s              - 2s delay
animate__delay-3s              - 3s delay
animate__delay-4s              - 4s delay
animate__delay-5s              - 5s delay
*/

/**
 * ANIMATION TIMING
 * ================
 */

/* Standard durations */
$animation-duration-fast: 200ms;    /* Hover effects */
$animation-duration-normal: 600ms;  /* Section animations */
$animation-duration-slow: 1s;       /* Large transitions */

/* Easing functions */
$easing-ease: ease;
$easing-ease-out: ease-out;
$easing-ease-in-out: ease-in-out;
$easing-cubic: cubic-bezier(0.4, 0, 0.2, 1);

/**
 * USAGE EXAMPLES
 * ==============
 */

/* 1. Element with Animate.css */
.section-title {
    animation: slideInLeft 0.6s ease-out;
}

/* 2. Staggered animation delay */
.skill-card:nth-child(1) { animation-delay: 0.1s; }
.skill-card:nth-child(2) { animation-delay: 0.2s; }
.skill-card:nth-child(3) { animation-delay: 0.3s; }

/* 3. Hover animation */
.project-card:hover {
    animation: scaleIn 0.4s ease-out forwards;
}

/* 4. Intersection Observer triggered (JavaScript) */
.skill-card.visible {
    animation: fadeInUp 0.6s ease-out forwards;
}

/**
 * BROWSER COMPATIBILITY
 * =====================
 */

/*
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (use -webkit- prefix for older versions)
- IE 11: Partial support (no CSS Grid, limited animations)

For maximum compatibility:
transform: translateX(0);     ✅ Use instead of margin
opacity: 0;                    ✅ Use instead of visibility
will-change: transform;        ⚡ GPU acceleration
transform: translate3d(0,0,0); ⚡ 3D acceleration hack
*/

/**
 * PERFORMANCE TIPS
 * ================
 */

/*
1. Use transform & opacity for smooth 60fps animations
   ❌ Avoid: width, height, left, top, margin
   ✅ Use: transform, opacity

2. Add will-change to animated elements
   .animated { will-change: transform; }

3. Use animation-fill-mode: forwards for persistence
   .final-state { animation-fill-mode: forwards; }

4. Combine animations for complexity
   animation: fadeIn 0.3s ease, slideIn 0.6s ease;

5. Use Intersection Observer for scroll triggers
   Don't animate everything on page load!

6. Throttle scroll events
   Use requestAnimationFrame for performance
*/

/**
 * TESTING & DEBUGGING
 * ===================
 */

/*
Chrome DevTools:
1. Slow down animations: Rendering > Animations > 10x
2. Disable animations: ESC > Animations panel
3. Performance: Record & analyze framerate

Firefox DevTools:
1. Inspector > Animations panel
2. Play/pause individual animations
3. Adjust timing curve live
*/
