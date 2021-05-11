import Vue from "vue";
import Router from "vue-router";
import Login from 'src/components/Login'
import CreateManager from 'src/components/CreateManager'

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "login",
            component: Login
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