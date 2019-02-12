import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import axios from "./api/http.js";

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

import VueParticles from 'vue-particles'  
Vue.use(VueParticles)

Vue.prototype.api = axios;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render:h=>h(App)
})