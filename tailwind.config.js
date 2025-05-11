/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],theme: {
    extend: {
      fontFamily: {
          'dancing-script': ['"Dancing Script"', 'cursive'],
          'open-sans': ['"Open Sans"', 'sans-serif'],
          'montserrat': ['"Montserrat"', 'sans-serif'],
          'playfair': ['Playfair Display', 'serif'],
          'Lora': ['Lora', 'serif'],
      }
  }
  },
  plugins: [],
}

