// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                'scroll-left': 'scrollLeft 30s linear infinite',
            },
            keyframes: {
                scrollLeft: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    variants: {},
    plugins: [],
}