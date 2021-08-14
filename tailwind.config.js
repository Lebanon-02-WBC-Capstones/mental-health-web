module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      colors: {
        "purple": "#1aab8a",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

 