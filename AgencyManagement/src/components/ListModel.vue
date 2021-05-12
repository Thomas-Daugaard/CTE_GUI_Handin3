<template>
    <form class="form">
        <ul>
            <li v-for="model in models" v-bind_key="model.id" v-bind:firstName="model.firstName" v-bind:lastName="model.lastName">
                {{model.firstName}} {{model.lastName}}
            </li>
        </ul>
    </form>
</template>

<script>
    const vm = new Vue({
        name: 'list-model',
        data() {
            models: []
        },
        methods: {
            getModels: function () {
                let url = "https://localhost:44368/api/Models";
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => {
                    this.response = responseJson);
            })
        .catch(error => alert('Something bad happened: ' + error));
            }
        }
    }
    )

</script>

<style scoped>
</style>