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
//全局注册过滤器
Vue.filter('priceFormat2', function (price) {
        if (price === undefined || price === null || isNaN(price)) {
            return price
        }
        return '$' + (price).toFixed(2)
    }
)