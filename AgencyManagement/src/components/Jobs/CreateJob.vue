<template>
    <form class="form">
        <div>
            <input class="name formEntry" type="text" placeholder="Enter Customer name" v-model="newjob.customer" />
        </div>
        <div>
            <input class="name formEntry" type="datetime" placeholder="Enter Start date" v-model="newjob.startdate" />
        </div>
        <div>
            <input class="name formEntry" type="number" placeholder="Enter No. of days" v-model="newjob.days" />
        </div>
        <div>
            <input class="name formEntry" type="text" placeholder="Enter Location" v-model="newjob.location" />
        </div>
        <div>
            <input class="name formEntry" type="text" placeholder="Comments" v-model="newjob.comments" />
        </div>
        <div>
            <input class="submit formEntry" type="button" value="Create Job" name="createbtn" v-on:click="postjob" />
            <input class="submit formEntry" type="button" value="See all jobs" name="createbtn" v-on:click="seealljobs" />
        </div>
    </form>
</template>

<script>
    export default {
        name: 'create-job',
        data() {
            return {
                newjob: {
                    customer: '',
                    startdate: '',
                    days: '',
                    location: '',
                    comments: ''
                }
            }
        },
        methods: {
            postjob: async function () {
                let url = "https://localhost:44368/api/Jobs";

                await fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(this.newjob)
                }).then(res => res.json()).catch(error => alert("Error" + error));


                this.$router.push('/app');

            },
            seealljobs: async function () {
                this.$router.push('/jobs/index');
            }
        }
    }
</script>

<style scoped>
</style>