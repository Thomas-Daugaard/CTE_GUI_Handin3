<template>
    <div>
        <form class="form">
            <input class="submit formEntry" type="button" value="Add model to job" name="addbtn" v-on:click="addmodel" />
        </form>
        <ul>
            <li v-for="(job, index) of jobs" :key="index"> {{job.customer}} </li>
        </ul>
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
                    .then(res => this.jobs = res.data)
                    .catch(error => alert("Error" + error));


            },
            addmodel: async function () {

            }
        },
        mounted() {
            this.getjobs()
        }
    }
</script>

<style scoped>
</style>