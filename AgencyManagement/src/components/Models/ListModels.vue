<template>
    <form class="form">
        <ul>
            <li v-for="(model, index) in models" :key="index">
                {{model.firstName}} {{model.lastName}}
            </li>
        </ul>
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
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
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