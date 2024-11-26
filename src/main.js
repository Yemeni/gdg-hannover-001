import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'impress.js';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const initAnimations = () => {
    // Basic animations
    gsap.from('.step', {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scale: 0.8,
        ease: 'power2.out',
    });

    // Scroll-triggered animations
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
};

const reinitializeImpress = () => {
    console.log('Reinitializing Impress.js...');
    window.impress().init();
    initAnimations();
};

// Main entry point
document.addEventListener('DOMContentLoaded', async () => {
    const impressContainer = document.createElement('div');
    impressContainer.id = 'impress';
    document.body.appendChild(impressContainer);


    window.impress().init();
    initAnimations();

    window.addEventListener('resize', () => {
        reinitializeImpress();
    });
});
