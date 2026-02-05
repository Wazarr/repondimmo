/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'editorial': ['Cormorant Garamond', 'serif'],
        'brutalist': ['Anton', 'sans-serif'],
        'futuristic': ['Orbitron', 'sans-serif'],
        'organic': ['Caveat', 'cursive'],
        'syne': ['Syne', 'sans-serif'],
        'unbounded': ['Unbounded', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
