/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                homebg: "url('/src/assets/bg/home-bg.jpg')"
            }
        }
    },
    plugins: []
};
