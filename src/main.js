import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";
import "icon.place/iconplace.css";

Vue.prototype.iconsData = require("../icons.json");

new Vue({
  render: (h) => h(App),
}).$mount("#app");
