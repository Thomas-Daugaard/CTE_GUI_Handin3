<template>
    <div>
        <form method="post" class="form">
            <h1>Add Expense</h1>
            <input v-model="newExpense.date" class="name formEntry" placeholder="Enter Date" />
            <input v-model="newExpense.text" class="name formEntry" placeholder="Enter Text" />
            <input v-model="newExpense.amount" class="name formEntry" placeholder="Enter Amount" />
            <input type="button" class="submit formEntry" value="Add Expense" v-on:click="postExpense" />
            <router-link :to="'/jobs/index'"><input type="button" class="submit formEntry" value="Back to jobs" /></router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'add-expense',
        data() {
            return {
                newExpense: {
                    date: '',
                    text: '',
                    amount: ''
                }
            }
        },
        methods: {
            postExpense: async function () {
                let url = "https://localhost:44368/api/Expenses";
                fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(this.form.newModel)
                }).then(res => res.json()).catch(error => alert("Error" + error));
            }
        }
    }
</script>

<style scoped>
</style>