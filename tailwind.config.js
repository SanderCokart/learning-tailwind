/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            screens: {
                'widescreen': {raw: '(min-aspect-ratio: 3/2)'},
                'tallscreen': {raw: '(min-aspect-ratio: 1/2)'},
            }
        }
    },
    plugins: []
};