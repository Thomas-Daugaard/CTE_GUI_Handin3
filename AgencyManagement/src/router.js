import Vue from "vue";
import Router from "vue-router";
import createManager from './components/CreateManager.vue'
import myLogin from './components/MyLogin.vue'
import newModel from './components/NewModel.vue'


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
            component: createManager
        },
        {
            path: "/",
            name: "NewModel",
            component: newModel
        },
        {
            path: '*',
            name: 'Login',
            component: myLogin
        }

        ]
})