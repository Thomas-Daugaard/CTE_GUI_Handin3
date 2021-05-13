<template>
    <div class="container form">
        <ul class="responsive-table">
            <li class="table-header">
                <div class="col col-1">Customer</div>
                <div class="col col-2">Start Date</div>
                <div class="col col-3">Days</div>
                <div class="col col-4">Location</div>
                <div class="col col-5"></div>
            </li>
            <li class="table-row" v-for="(job, index) of jobs" :key="index">
                <div class="col col-1" data-label="Customer">{{job.customer}}</div>
                <div class="col col-2" data-label="Start Date">{{job.startDate}}</div>
                <div class="col col-3" data-label="Days">{{job.days}}</div>
                <div class="col col-4" data-label="Location">{{job.location}}</div>
                <div class="col col-5" data-label="Job id"><a>Add model</a></div>
            </li>
        </ul>

        <form class="form">
            <input class="submit formEntry" type="button" value="Add model to job" name="addbtn" v-on:click="addmodel" />
            <input class="submit formEntry" type="button" value="Create Job" name="createbtn" v-on:click="postjob" />
        </form>
        </div>
</template>

<script>
    export default {
        name: 'list-jobs',
        data() {
            return {
                jobs: []
            }
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
            addmodel: async function () {

            },
            postjob: async function () {
                this.$router.push('/jobs/create');
            }
        },
        mounted() {
            this.getjobs()
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
        flex-basis: 20%;
    }

    .responsive-table .col-2 {
        flex-basis: 35%;
    }

    .responsive-table .col-3 {
        flex-basis: 15%;
    }

    .responsive-table .col-4 {
        flex-basis: 30%;
    }
    .responsive-table .col-5 {
        flex-basis: 30%;
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
 
</style>