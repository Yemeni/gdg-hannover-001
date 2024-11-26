import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import 'impress.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Impress.js
document.addEventListener('DOMContentLoaded', () => {
    window.impress().init();

    // Basic Animation: Fade-in and scale slides
    gsap.from('.step', {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scale: 0.8,
        ease: 'power2.out',
    });

    // Additional Animation: Zoom in on Slide 2
    gsap.to('#slide2', {
        scale: 1.2,
        duration: 1,
        delay: 2,
    });

    // Hover Effects for Slides
    gsap.utils.toArray('.step').forEach((step) => {
        step.addEventListener('mouseenter', () => {
            gsap.to(step, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out',
            });
        });
        step.addEventListener('mouseleave', () => {
            gsap.to(step, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            });
        });
    });

    // Scroll-based Animations
    gsap.from('.step', {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.step',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
    });
});
