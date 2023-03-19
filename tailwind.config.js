/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                homebg: "url('/src/assets/bg/home-bg.jpg')"
            },
            fontFamily: {
                title: "'Title'"
            },
            colors: {
                orange: '#ff8c4f',
                yellow: '#ffe488',
                pink: '#fd2b58'
            }
        }
    },
    plugins: []
};
