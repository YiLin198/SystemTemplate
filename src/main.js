import Vue from "vue";

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

// import '@/styles/element-variables.scss'
// import '@/styles/index.scss' // global css
// import '@/styles/dts.scss'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(ElementUI);

axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
