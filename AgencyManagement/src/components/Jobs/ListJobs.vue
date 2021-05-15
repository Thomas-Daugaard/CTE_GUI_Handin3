<template>
    <div>
        <ul class="responsive-table">
            <li class="table-header">
                <div class="col col-1">Customer</div>
                <div class="col col-2">Start Date</div>
                <div class="col col-3">Days</div>
                <div class="col col-4">Location</div>
                <div class="col-5"></div>
                <div class="col-5"></div>
            </li>
            <li class="table-row" v-for="(job, index) of jobs" :key="index">
                <div class="col col-1" data-label="Customer">{{job.customer}}</div>
                <div class="col col-2" data-label="Start Date">{{job.startDate}}</div>
                <div class="col col-3" data-label="Days">{{job.days}}</div>
                <div class="col col-4" data-label="Location">{{job.location}}</div>

                <div class="dropdown col-5">
                    <button class="dropbtn">Add model</button>
                    <div class="dropdown-content">
                        <a v-if="checkIfAdded(job, model)" v-for="(model, index) in models" :key="index" v-on:click="addModel(job, model)">{{ model.firstName }} {{ model.lastName }}</a>
                    </div>
                </div>

                <div>
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
                models: [],
                chosenjobid: 0,
                modelid: 0,
                showModal: false,
                modalTitle: "Succes!"
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
            getmodels: async function () {
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
                    .catch(error => alert("Error" + error));


            },
            checkIfAdded: function (job, modelToCompare) {
                if (job.jobModels == null) {
                    return true;
                }
                for (let model of job.jobModels) {
                    if (model == modelToCompare)
                        return false;
                }
                return true;
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

                this.getjobs();
                if (this.checkIfAdded(job, model)) {
                    this.$alert("Model added", "Success")
                }
                
            },
            addjob: async function () {
                this.$router.push('/jobs/create');
            }
        },
        mounted() {
            this.getjobs()
            this.getmodels()
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
        max-width: 65%;
        margin: 0 15% 0 15%;
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
        flex-basis: 30%;
    }

    .responsive-table .col-3 {
        flex-basis: 5%;
    }

    .responsive-table .col-4 {
        flex-basis: 25%;
    }
    .responsive-table .col-5 {
        flex-basis: 15%;
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