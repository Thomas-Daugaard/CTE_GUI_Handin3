<template>
    <h1>All Jobs</h1>

    <form class="form">
        <div>
            <ul>
                <li v-for="">
                    {{Job.id}} {{Job.customer}}{{Job.startdate}}{{Job.days}}{{Job.location}}
                </li>
            </ul>
        </div>
        <div>
            <input class="submit formEntry" type="button" value="Add model to job" name="addbtn" v-on:click="addmodel" />
        </div>
    </form>
</template>

<script>
    export default {
        name: 'list-jobs',
        data() {
            return {
                newmanager: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            listAll: async function () {
                let url = "https://localhost:44368/api/Managers";

                await fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(this.newmanager)
                }).then(res => res.json()).catch(error => alert("Error" + error));


                this.$router.push('/app');

            },
            addmodel: async function () {

            }
        }
    }
</script>

<style scoped>
</style>