const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      gray: colors.blueGray,
      blue: colors.lightBlue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
