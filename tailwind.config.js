/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                green: "url('/bg/green.png')",
                pink: "url('/bg/pink.png')",
                blue: "url('/bg/blue.png')"
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
