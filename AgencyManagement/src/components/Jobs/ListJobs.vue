<template>
    <div>
        <ul class="responsive-table">
            <li class="table-header">
                <div class="col col-1">Customer</div>
                <div class="col col-2">Start Date</div>
                <div class="col col-3">Days</div>
                <div class="col col-4">Location</div>
                <div class="col-5"></div>
                <div class="col-6"></div>
                <div class="col-7"></div>
            </li>
            <li class="table-row" v-for="(job, index) of jobs" :key="index">
                <div class="col col-1" data-label="Customer">{{job.customer}}</div>
                <div class="col col-2" data-label="Start Date">{{job.startDate}}</div>
                <div class="col col-3" data-label="Days">{{job.days}}</div>
                <div class="col col-4" data-label="Location">{{job.location}}</div>

                <div v-if="isManager" class="dropdown col-5">
                    <button class="dropbtn" v-on:mouseover="getJob(job.efJobId)">Add model</button>
                    <div class="dropdown-content">
                        <a v-for="(model, index) in models" :key="index" v-if="checkIfAdded(model)"  v-on:click="addModel(job, model)">{{ model.firstName }} {{ model.lastName }}</a>
                    </div>
                </div>
                <div v-if="isManager" class="dropdown col-6">
                    <button class="dropbtn" v-on:mouseover="getJob(job.efJobId)">Delete model</button>
                    <div class="dropdown-content">
                        <a v-for="(model, index) in modelsWithJob" :key="index" v-on:click="deleteModel(job, model); $alert('Model deleted');">{{ model.firstName }} {{ model.lastName }}</a>
                    </div>
                </div>
                <div class="dropdown col-7">
                    <router-link :to="{name: 'AddExpense', params: {chosenjobid}}"><input type="button" class="dropbtn" v-on:click="chosenjobid=job.efJobId" value="Add Expense" /></router-link>
                </div>
            </li>
        </ul>

        <input class="submit formEntry" type="button" value="Add new job" v-on:click="addjob" />

    </div>
</template>

<script>
    import addExpense from './AddExpense.vue'
    export default {
        name: 'list-jobs',
        data() {
            return {
                jobs: [],
                allModels: [],
                modelsWithJob: [],
                models: [],
                chosenjobid: 0,
                modelid: 0,
                showModal: false,
                modalTitle: "Succes!",
                isManager: false
            }
        },
        components: {
            addExpense
        },
        methods: {
            getjobs: async function () {
                let url = "https://localhost:44368/api/jobs";

                await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }

                }).then(res => res.json())
                    .then(res => this.jobs = res)
                    .catch(error => alert("Error" + error));
            },
            getModels: async function () {
                let url = "https://localhost:44368/api/models";

                await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }

                }).then(res => res.json())
                    .then(res => this.models = res)
                    .then(res => this.allModels = res)
                    .catch(error => alert("Error" + error));

            },
            async addModel(job, model) {
                let url = "https://localhost:44368/api/Jobs/" + job.efJobId + "/model/" + model.efModelId;

                let data = {
                    "jobId": job.efJobId,
                    "modelId": model.efModelId
                }

                await fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(data)
                })

                this.$alert("Model added", "Success");
                },
            async getJob(id) {
                let url2 = "https://localhost:44368/api/jobs/" + id;
                await fetch(url2, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(res => this.job = res)
                    .then(res => this.modelsWithJob = res.models)
                    .catch(error => alert("Error" + error));

            },
            checkIfAdded(modelToCompare) {
                for (let model of this.modelsWithJob) {
                    if (modelToCompare.firstName == model.firstName) {
                        return false;
                    }
                }

                return true;
            },
            async deleteModel(job, model) {
                let modelId = this.getModelId(model);

                console.log(modelId);
                console.log(this.allModels[0]);

                let url = "https://localhost:44368/api/Jobs/" + job.efJobId + "/model/" + modelId;

                let data = {
                    "jobId": job.efJobId,
                    "modelId": modelId
                }

                await fetch(url, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(data)
                })
            },
           
           
            addjob: async function () {
                this.$router.push('/jobs/create');
            },
            checkUser: function () {
                if (localStorage.getItem("isManager") == "true") {
                    this.isManager = true;
                }
                else
                    this.isManager = false;
            },
            getModelId(modelA) {
                for (let modelB of this.allModels) {
                    if (modelA.email == modelB.email) {
                        return modelB.efModelId;
                    }
                }
            }
        },
        mounted() {
            this.getjobs()
            this.checkUser()
            if (this.isManager) {
                this.getModels()
            }
        }
    }
</script>

<style scoped>
    body {
        font-family: 'lato', sans-serif;
        background: khaki;
    }

    .container {
        max-width: 100%;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
    }

        h2 small {
            font-size: 0.5em;
        }

    .responsive-table li {
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        max-width: 85%;
        margin: 0 10% 0 10%;
    }

    .responsive-table .table-header {
        background-color: #95a5a6;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    .responsive-table .table-row {
        background-color: #fff;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }

    .responsive-table .col-1 {
        flex-basis: 15%;
    }

    .responsive-table .col-2 {
        flex-basis: 25%;
    }

    .responsive-table .col-3 {
        flex-basis: 5%;
    }

    .responsive-table .col-4 {
        flex-basis: 20%;
    }
    .responsive-table .col-5 {
        flex-basis: 10%;
    }

    .responsive-table .col-6 {
        flex-basis: 11%;
    }

    .responsive-table .col-7 {
        flex-basis: 10%;
    }

    @media all and (max-width: 767px) {
        .responsive-table .table-header {
            display: none;
        }

        .responsive-table li {
            display: block;
        }

        .responsive-table .col {
            flex-basis: 80%;
        }

        .responsive-table .col {
            display: flex;
            padding: 10px 0;
        }

            .responsive-table .col:before {
                color: #6c7a89;
                padding-right: 10px;
                content: attr(data-label);
                flex-basis: 50%;
                text-align: right;
            }
    }

    /* Dropdown Button */
    .dropbtn {
        background-color: black;
        color: white;
        padding: 8px;
        font-size: 14px;
        border: none;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        max-width: 85px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

        /* Links inside the dropdown */
        .dropdown-content a {
            color: black;
            padding: 8px;
            text-decoration: none;
            display: block;
        }

            /* Change color of dropdown links on hover */
            .dropdown-content a:hover {
                background-color: #ddd;
            }

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
        background-color: #95a5a6;
        color: black;
    }
 
    a {
        font-size: 13px;
    }
</style>