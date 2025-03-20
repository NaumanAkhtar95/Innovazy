/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
            keyframes: ({
                fadeInbg: {
                    '0%': { backgroundColor: "transparent" },
                    '100%': { backgroundColor: "bg-gray-900/80" },
                },
                fadeOutbg: {
                    '100%': { backgroundColor: "bg-gray-900/80" },
                    '0%': { backgroundColor: "transparent" },
                },
                fadeIn: {
                    '0%': { opacity: "0" },
                    '100%': { opacity: "1" },
                },
                fadeOut: {
                    '100%': { opacity: "1" },
                    '0%': { opacity: "0" },
                },
            }),
            colors: {
                primary: {
                    orange: '#F17840',
                    purple: '#7F30FF',
                },
                secondary: {
                    darkBg: 'rgba(12, 12, 12, 0.7)',
                    darkGradientBg: 'rgba(11, 11, 11, 1)'
                },
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
            },
            fontWeight: {
                light: 300,
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
                black: 900,
            },
        },
        screens: {
            xs: '300px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xmd: '900px',
            '2xl': '1400px',
            '3xl': '1980px',
        },
    },
};
