export default {
    content: [
        './index.html',        // Include the main HTML file
        './src/**/*.{js,ts}',  // Include JavaScript/TypeScript files
        './slides/**/*.html'   // Include slide HTML files
    ],
    theme: {
        extend: {},
    },
    safelist: [
        'bg-blue-600',
        'bg-green-500',
        'bg-yellow-400',
        'bg-cover',
        'bg-center',
    ],
    plugins: [],
};
