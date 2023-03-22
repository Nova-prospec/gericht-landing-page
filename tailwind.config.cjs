/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm": {"max": "430px"},
        "md": {"max": "720px"},
        "lg": {"max": "900px"},
        "xl": {"max": "1200px"}
      },
      fontFamily:{
        "cormorant": ["Cormorant Upright", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "bestermind": ["Bestermind", "sans-serif"]
      },
      colors: {
        "primary-green": "#DCCA87",
        "primary-grey": "#AAAAAA",
        "primary-black": "#0C0C0C",
        "secondary-grey": "#272727",
        "faded-white": "#E5E5E5",
        "almost-white": "#F5F5F5"
      },
      backgroundImage: {
        "dark-bg": "url('/assets/dark-bg.svg')"
      },
      content: {
        "quotes": "url(/assets/quotes.svg)"
      }
    },
  },
  plugins: [],
}
