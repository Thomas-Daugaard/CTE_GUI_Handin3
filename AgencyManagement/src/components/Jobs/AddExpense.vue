<template>
    <div>
        <form class="form">
            <div>
                <h1>Add Expenses</h1>
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
                var token = this.parseJwt();
                this.newExpense.modelid = token.ModelId;

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
            },
            parseJwt() {
                var token = localStorage.getItem("token");
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                return JSON.parse(jsonPayload);
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

    a {
        font-size: 13px;
    }
</style>