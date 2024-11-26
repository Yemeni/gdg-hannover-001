import gsap from 'gsap';
import './style.css';
import 'impress.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Impress.js
    window.impress().init();

    // Example GSAP animation: fade in all slides
    gsap.from('.step', {
        opacity: 0,
        duration: 1,
        stagger: 0.3, // Animates slides one after another
        scale: 0.8,
        ease: 'power2.out',
    });

    // Additional example: zoom in one slide
    gsap.to('#slide2', {
        scale: 1.2,
        duration: 1,
        delay: 2,
    });
});
