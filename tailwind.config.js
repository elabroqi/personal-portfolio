import { defineConfig } from 'vite';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Satoshi', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
};
