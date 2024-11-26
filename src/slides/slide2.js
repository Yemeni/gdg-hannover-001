export default function createSlide2() {
    const slide = document.createElement('div');
    slide.id = 'slide2';
    slide.className = 'step bg-green-500 text-white p-8 rounded-lg shadow-lg';
    slide.setAttribute('data-x', 1000);
    slide.setAttribute('data-y', 500);
    slide.setAttribute('data-z', -1000);

    slide.innerHTML = `
        <h1 class="text-3xl font-bold">Next Slide</h1>
        <p class="mt-4">Styled with TailwindCSS and animated with GSAP.</p>
    `;
    return slide;
}
