/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        title: ['"Prata"', "serif"],
        body: ['"Lato"', "sans-serif"],
      },
      colors: {
        "logo-clr": "#be6138",
        "alt-logo-clr": "#3c596e",
        "alt-logo": "#3896be",
        "logo-bg": "#edd3c8",
        // "alt-bg": "#d2e7f0",
        "alt-bg": "#c6cfd5",
        "custom-white": "#f9f9f9",
        "custom-black": "#190000",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
