import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                "on-secondary-fixed": "#502f30",
                "on-primary": "#fff0e8",
                "surface-container-highest": "#e5dcc9",
                "on-primary-fixed-variant": "#62422c",
                "on-background": "#322e25",
                "on-error-container": "#520c00",
                "surface-dim": "#dcd4c0",
                "tertiary-container": "#e5fde7",
                "error-container": "#f95630",
                "on-tertiary-fixed": "#3c5040",
                "secondary-container": "#fecbcb",
                "primary-fixed-dim": "#dbb093",
                "on-primary-fixed": "#412612",
                "tertiary-fixed": "#e5fde7",
                "tertiary": "#4c6050",
                "outline": "#7c766a",
                "surface-container": "#f0e7d6",
                "secondary-fixed": "#fecbcb",
                "error-dim": "#b92902",
                "on-surface-variant": "#605b50",
                "secondary-dim": "#6a4647",
                "on-secondary-container": "#654142",
                "surface-bright": "#fef6e7",
                "surface": "#fef6e7",
                "primary-dim": "#694832",
                "secondary-fixed-dim": "#efbdbd",
                "inverse-primary": "#eabda0",
                "tertiary-dim": "#405444",
                "tertiary-fixed-dim": "#d7eed9",
                "primary": "#76543d",
                "on-surface": "#322e25",
                "surface-variant": "#e5dcc9",
                "primary-container": "#eabda0",
                "surface-container-low": "#f8f0e0",
                "inverse-surface": "#110e06",
                "on-tertiary": "#e1f9e3",
                "outline-variant": "#b3ac9f",
                "surface-tint": "#76543d",
                "on-error": "#ffefec",
                "on-tertiary-container": "#4e6252",
                "on-tertiary-fixed-variant": "#586d5c",
                "on-secondary": "#ffefee",
                "secondary": "#785252",
                "inverse-on-surface": "#a29c8f",
                "on-primary-container": "#573924",
                "on-secondary-fixed-variant": "#704b4b",
                "background": "#fef6e7",
                "surface-container-lowest": "#ffffff",
                "error": "#b02500",
                "surface-container-high": "#eae2d0",
                "primary-fixed": "#eabda0"
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                headline: ["Plus Jakarta Sans", "sans-serif"],
                body: ["Be Vietnam Pro", "sans-serif"],
                label: ["Be Vietnam Pro", "sans-serif"]
            },
        },
    },

    plugins: [forms],
};
