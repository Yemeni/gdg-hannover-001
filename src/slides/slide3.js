export default function createSlide3() {
    const slide = document.createElement('div');
    slide.id = 'slide3';
    slide.className = 'step bg-yellow-400 text-black p-8 rounded-lg shadow-lg';
    slide.setAttribute('data-x', 2000);
    slide.setAttribute('data-y', 1000);
    slide.setAttribute('data-z', -2000);

    slide.innerHTML = `
        <h1 class="text-3xl font-bold">Final Slide</h1>
        <p class="mt-4">Smooth animations with GSAP.</p>
    `;
    return slide;
}
