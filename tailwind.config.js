module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'contact-us-header': "url('contact-us-header.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
