export default function createSlide1() {
    const slide = document.createElement('div');
    slide.id = 'slide1';
    slide.className = 'step bg-blue-600 text-white p-8 rounded-lg shadow-lg';
    slide.setAttribute('data-x', 0);
    slide.setAttribute('data-y', 0);
    slide.setAttribute('data-z', 0);

    slide.innerHTML = `
        <h1 class="text-3xl font-bold">Welcome</h1>
        <p class="mt-4">3D Presentation with Impress.js</p>
    `;
    return slide;
}
