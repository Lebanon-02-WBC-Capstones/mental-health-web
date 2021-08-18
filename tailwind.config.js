module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "landingpage-pic":
          "url('https://cdn.pixabay.com/photo/2016/11/28/21/20/happiness-1866081_960_720.jpg')",
      }),
      backgroundSize: {
        "100%": "100% 100%",
        16: "4rem",
      },
      lineHeight: {
        "70px": "70px",
      },
      screens: {
        sm: { max: "639px" },
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
