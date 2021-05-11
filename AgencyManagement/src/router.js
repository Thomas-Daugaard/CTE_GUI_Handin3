import Vue from "vue";
import Router from "vue-router";
import CreateManager from './components/CreateManager.vue'
import myLogin from './components/MyLogin.vue'


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Login",
            component: myLogin
        },
        {
            path: "/",
            name: "CreateManager",
            component: CreateManager
        },
        {
            path: "/",
            name: "newModel",
            component: NewModel
        },

        ]
})