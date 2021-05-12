import Vue from "vue";
import Router from "vue-router";
import createManager from './components/CreateManager.vue'
import myjobs from './components/Job.vue'
import myLogin from './components/MyLogin.vue'
import newModel from './components/NewModel.vue'
import listJobs from './components/listJobs.vue'

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
            path: "/job",
            name: "myjobs",
            component: myjobs
        },
        {
            path: "/listJobs",
            name: "listJobs",
            component: listJobs
        }

        ]
})