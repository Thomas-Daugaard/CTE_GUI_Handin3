import Vue from "vue";
import Router from "vue-router";
import myIndex from './components/myIndex.vue'
import login from './components/Login.vue'
import createManager from './components/Managers/CreateManager.vue'
import createModel from './components/Models/CreateModel.vue'
import listModels from './components/Models/ListModels.vue'
import createJob from './components/Jobs/CreateJob.vue'
import listJobs from './components/Jobs/ListJobs.vue'
import modelDetails from './components/Models/ModelDetails.vue'
import addExpense from './components/Jobs/AddExpense.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/index",
            name: "Index",
            component: myIndex
        },
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
        },
        {
            path: "/models/details",
            name: "ModelDetails",
            component: modelDetails,
            props: true
        },
        {
            path: "/jobs/addexpense",
            name: "AddExpense",
            component: addExpense
        }
        ]
})