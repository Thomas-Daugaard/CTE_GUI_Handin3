<template>
    <div>
        <form class="form">
            <div>
                <h1>Add Expenses</h1>
                <div class="dropdown submit formEntry" style="padding-left: 0">
                    <button class="dropbtn">Add model to expense</button>
                    <div class="dropdown-content">
                        <a v-for="(model, index) in models" :key="index" v-on:click="newExpense.modelid=model.efModelId; $alert('Model added');">{{ model.firstName }} {{ model.lastName }}</a>
                    </div>
                </div>
                <input v-model="newExpense.date" class="name formEntry" type="datetime" placeholder="Enter Date" />
                <input v-model="newExpense.text" class="name formEntry" type="text" placeholder="Enter Text" />
                <input v-model="newExpense.amount" class="name formEntry" type="text" placeholder="Enter Amount" />
                <input type="button" class="submit formEntry" value="Add Expense" v-on:click="postExpense" />
                <router-link :to="'/jobs/index'"><input type="button" class="submit formEntry" value="Back to jobs" /></router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'add-expense',
        props: ['chosenjobid'],
        data() {
            return {
                job: null,
                models: [],
                newExpense: {
                    date: '',
                    text: '',
                    amount: '',
                    modelid: 0,
                    jobid: this.chosenjobid
                }
                
            }
        },
        methods: {
            getjobmodels: function () {
                let url2 = "https://localhost:44368/api/jobs/" + this.newExpense.jobid;
                fetch(url2, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(res => this.job = res)
                    .then(res => this.models = res.models)
                    .catch(error => alert("Error" + error));

            },
            postExpense: function () {
                let url = "https://localhost:44368/api/Expenses";
                fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(this.newExpense)
                }).then(res => res.json()).catch(error => alert("Error" + error));
            }
        },
        mounted() {
            this.getjobmodels()
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
    /* Dropdown Button */
    .dropbtn {
        background-color: black;
        color: white;
        padding: 8px;
        padding-left: 50px;
        font-size: 20px;
        border: none;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        width: 200px;
        color: black;
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