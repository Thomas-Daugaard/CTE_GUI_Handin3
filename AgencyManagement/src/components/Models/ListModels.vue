<template>
    <form class="form"  v-on:load="getModels">
        <ul>
            <li v-for="(model, index) in models" :key="index">
            <li v-for="model in models" v-bind:key="model.id" v-bind:firstName="model.firstName" v-bind:lastName="model.lastName">
                {{model.firstName}} {{model.lastName}}
            </li>
        </ul>
        <input class="submit formEntry" type="button" value="Create Model" name="createbtn" v-on:click="createModel" />
    </form>
</template>

<script>
    export default {
        name: 'list-models',
        data() {
            return {
                models: []
            }
        },
        methods: {
            getModels: async function () {
                let url = "https://localhost:44368/api/models";

                await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }

                }).then(res => res.json())
                    .then(res => this.jobs = res.data)
                    .catch(error => alert("Error" + error));
            }
        },
        mounted() {
            this.getModels()
        }
    }

</script>

<style scoped>
</style>