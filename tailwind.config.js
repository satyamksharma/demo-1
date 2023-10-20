/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'fuschia-100': 'var(--fuschia-100)',
                'fuschia-60': 'var(--fuschia-60)',
                'fuschia-80': 'var(--fuschia-80)',
                'gray-300': 'var(--gray-300)',
                'gray-500': 'var(--gray-500)',
                'gray-700': 'var(--gray-700)',
                'gray-900': 'var(--gray-900)',
                'iris-100': 'var(--iris-100)',
                'iris-60': 'var(--iris-60)',
                'iris-80': 'var(--iris-80)',
                'primary-50': 'var(--primary-50)',
                'primary-600': 'var(--primary-600)',
                white: 'var(--white)',
            },
            fontFamily: {
                body: 'var(--body-font-family)',
                'header-1': 'var(--header-1-font-family)',
                'header-2': 'var(--header-2-font-family)',
                'text-md-medium': 'var(--text-md-medium-font-family)',
                'text-md-regular': 'var(--text-md-regular-font-family)',
                'text-sm-medium': 'var(--text-sm-medium-font-family)',
                'text-sm-regular': 'var(--text-sm-regular-font-family)',
            },
            boxShadow: {
                'shadow-xs': 'var(--shadow-xs)',
            },
        },
    },
    plugins: [],
};
