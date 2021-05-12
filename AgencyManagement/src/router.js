import Vue from "vue";
import Router from "vue-router";
import createManager from './components/CreateManager.vue'
import myLogin from './components/MyLogin.vue'
import newModel from './components/NewModel.vue'
import myIndex from './components/Index.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "Login",
            component: myLogin
        },
        {
            path: "/CreateManager",
            name: "CreateManager",
            component: createManager
        },
        {
            path: "/model",
            name: "NewModel",
            component: newModel
        },
        {
            path: "/index",
            name: "MyIndex",
            component: myIndex
        }

        ]
})