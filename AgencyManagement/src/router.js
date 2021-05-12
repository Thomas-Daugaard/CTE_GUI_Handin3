import Vue from "vue";
import Router from "vue-router";
import login from './components/Login.vue'
import createManager from './components/Managers/CreateManager.vue'
import createModel from './components/Models/CreateModel.vue'
import listModels from './components/Models/ListModels.vue'
import createJob from './components/Jobs/CreateJob.vue'
import listJobs from './components/Jobs/ListJobs.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "Login",
            component: login
        },
        {
            path: "/managers/create",
            name: "CreateManager",
            component: createManager
        },
        {
            path: "/models/create",
            name: "CreateModel",
            component: createModel
        },
        {
            path: "/models/index",
            name: "ListModels",
            component: listModels
        },
        {
            path: "/jobs/create",
            name: "CreateJob",
            component: createJob
        },
        {
            path: "/jobs/index",
            name: "ListJobs",
            component: listJobs
        }

        ]
})