import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  // 路由
  router,
  // 状态管理
  store,
  render: (h) => h(App),
}).$mount("#app");
