import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";
import "icon.place/iconplace.css";

Vue.prototype.iconsData = require("../icons.json");

Vue.prototype.refreshMode = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
};

Vue.prototype.refreshMode();
new Vue({
  render: (h) => h(App),
}).$mount("#app");
