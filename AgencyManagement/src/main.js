import Vue from 'vue';
import App from './App.vue'
import router from "./router"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSimpleAlert from "vue-simple-alert";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;

window.EventBus = new Vue();

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');