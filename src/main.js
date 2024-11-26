import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'impress.js';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

async function loadSlides() {
    // Import all modules from the slides directory
    const modules = import.meta.glob('./slides/*.js');
    const impress = document.getElementById('impress');

    // Import each module dynamically and append the returned slide to the presentation
    for (const path in modules) {
        const module = await modules[path]();
        const slide = module.default();
        impress.appendChild(slide);
    }
}

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

// Main entry point
document.addEventListener('DOMContentLoaded', async () => {
    const impressContainer = document.createElement('div');
    impressContainer.id = 'impress';
    document.body.appendChild(impressContainer);

    await loadSlides();
    window.impress().init();
    initAnimations();
});
