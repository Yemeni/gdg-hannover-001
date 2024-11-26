import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'impress.js';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const initAnimations = () => {
    gsap.from('.step', {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scale: 0.8,
        ease: 'power2.out',
    });

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

const init3DBackground = () => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('world-map.jpg'); // Surface map
    const bumpMap = textureLoader.load('earth-bump.jpg'); // Bump map for elevation
    const specularMap = textureLoader.load('earth-specular.jpg'); // Specular map for reflections
    const cloudsTexture = textureLoader.load('earth-clouds.jpg'); // Clouds map

    // Create the Earth sphere
    const earthGeometry = new THREE.SphereGeometry(5, 64, 64); // Radius, width, and height segments
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,          // Surface map
        bumpMap: bumpMap,           // Bump map
        bumpScale: 0.01,             // Elevation intensity
        specularMap: specularMap,   // Specular highlights
        specular: new THREE.Color(0x333333), // Specular color (grey)
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Create the clouds
    const cloudsGeometry = new THREE.SphereGeometry(5.05, 64, 64); // Slightly larger than Earth
    const cloudsMaterial = new THREE.MeshPhongMaterial({
        map: cloudsTexture,         // Clouds map
        transparent: true,          // Make clouds semi-transparent
        opacity: 0.2,               // Optional: Control cloud density
    });
    const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    scene.add(clouds);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10); // Simulate sunlight
    scene.add(pointLight);

    // Position the camera
    camera.position.z = 10;

    let rotationSpeed = 0.001; // Default rotation speed
    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);

        // earth.rotation.y += 0.001;
        // clouds.rotation.y += 0.0015;

                // Apply rotation and speed
        earth.rotation.y += rotationSpeed;
        clouds.rotation.y += rotationSpeed * 1.5; // Clouds rotate slightly faster
        renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Expose functions to set Earth rotation and speed
    const controls = {
        setRotation(x, y) {
            earth.rotation.x = x;
            earth.rotation.y = y;
            renderer.render(scene, camera); // Trigger an immediate update
        },
        setRotationSpeed(speed) {
            rotationSpeed = speed;
        },


    };

    // Expose controls globally for testing/debugging
    window.earthControls = controls;
    return controls;
};

// Main entry point
document.addEventListener('DOMContentLoaded', async () => {
    const impressContainer = document.createElement('div');
    impressContainer.id = 'impress';
    document.body.appendChild(impressContainer);

    window.impress().init();
    // initAnimations();
    init3DBackground();

    window.addEventListener('resize', () => {
        console.log('Window resized. Reinitializing Impress.js.');
        window.impress().init();
        // initAnimations();
        init3DBackground();
    });


});
