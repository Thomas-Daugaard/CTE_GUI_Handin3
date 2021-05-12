<template>
    <form class="form" v-on:load="getallusers">
        <div>
            <ul>
                <li v-for="item in jobs">
                    {{item.JobdId}} {{item.Customer}} {{item.StartDate}} {{item.Days}} {{item.Location}}
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
                jobs: []
            }
        },
        methods: {
            getallusers: async function () {
                let url = "https://localhost:44368/api/Jobs";

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