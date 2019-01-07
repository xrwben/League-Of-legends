import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js"
// import axios from "./utils/http.js"

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI)

// Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render:h=>h(App)
})