<template>
    <div v-on:load="getallusers">
        <table v-for="job in jobs" v-bind:key="job">
            <tr>
                <td>
                    <p> {{ job.jobId }} </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p> {{ job.customer }} </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>{{ job.startDate }}</p>
                </td>
            </tr>
            <tr>
                 <td>
                     <p>{{ job.days }}</p>
                 </td>
            </tr>
            <tr>
                  <td>
                      <p>{{ job.location }}</p>
                  </td>
            </tr>
        </table>
        <form class="form">
            <input class="submit formEntry" type="button" value="Add model to job" name="addbtn" v-on:click="addmodel" />
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
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),

                }).then(res => res.json())
                    .then(res => this.jobs = res.data)
                    .catch(error => alert("Error" + error));


            },
            addmodel: async function () {

            }
        }
    }
</script>

<style scoped>
</style>