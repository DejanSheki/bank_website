/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ["Lora", 'serif'],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        'turquoise-logo': '#2E7189',
        'turquoise-headings': '#20373E',
        'turquoise': '#385A64',
        'dark-turquoise': '#1A2E35',
        'light-gray': '#E9E9E9',
        'gray': '#666666',
        'dark-gray': '#333333',
        'orange': '#ff735c',
        'btn-white': '#FBFBFB',
        'white': '#fff',
      },
    },

  },
  plugins: [],
}

