export default function createSlide5() {
    const slide = document.createElement('div');
    slide.id = 'slide5';
    slide.className = 'step bg-yellow-500 text-green p-8 rounded-lg shadow-lg';
    slide.setAttribute('data-x', 2400);
    slide.setAttribute('data-y', 1400);
    slide.setAttribute('data-z', -2400);

    slide.innerHTML = `
        <h1 class="text-3xl font-bold">5th Slide</h1>
        <p class="mt-4">Smooth animations with GSAP.</p>
    `;
    return slide;
}
