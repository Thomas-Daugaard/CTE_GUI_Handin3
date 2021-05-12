<template>
    <form class="form">
        <ul>
            <li v-for="(model, index) in models" :key="index">
            <li v-for="model in models" v-bind:key="model.id" v-bind:firstName="model.firstName" v-bind:lastName="model.lastName">
                {{model.firstName}} {{model.lastName}}
            </li>
        </ul>
        <router-link :to="'/models/create'"><input type="button" class="submit formEntry" value="New Model" /></router-link>
        <br />
    </form>
</template>

<script>
    import createModel from './CreateModel.vue'
    export default {
        name: 'list-models',
        components: {
            createModel
        },
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
                    })

                }).then(res => res.json())
                    .then(res => this.models = res)
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