<template>
    <div id="model">
        <h1>All Models</h1>
        <ul class="responsive-table">
            <li class="table-header">
                <div class="col col-1">Name</div>
                <div class="col col-2">Birth date</div>
                <div class="col col-3">Height</div>
                <div class="col col-4">Hair Color</div>
                <div class="col col-5">Eye Color</div>
                <div class="col col-6">Details</div>
            </li>
            <li class="table-row" v-for="(model, index) in models" :key="index">
                <div class="col col-1" data-label="Name">{{model.firstName}} {{model.lastName}}</div>
                <div class="col col-2" data-label="Birth date">{{model.birthDate}}</div>
                <div class="col col-3" data-label="Height">{{model.height}}</div>
                <div class="col col-4" data-label="Hair Color">{{model.hairColor}}</div>
                <div class="col col-5" data-label="Eye Color">{{model.eyeColor}}</div>
                <router-link :to="{name: 'ModelDetails', params: {modelid}}"><input type="button" value="Details" v-on:click="modelid = model.efModelId" /></router-link>
            </li>
        </ul>
        <router-link :to="'/models/create'"><input class="submit formEntry" type="button" value="Create Model"/></router-link>

        <br />
    </div>
</template>

<script>
    import createModel from './CreateModel.vue'
    import modelDetails from './ModelDetails.vue'

    export default {
        name: 'list-models',
        components: {
            createModel,
            modelDetails
        },
        data() {
            return {
                models: [],
                modelid: 0
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
    body {
        font-family: 'lato', sans-serif;
        background: khaki;
    }

    .container {
        max-width: 100%;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
    }

        h2 small {
            font-size: 0.5em;
        }

    .responsive-table li {
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        max-width: 65%;
        margin: 0 15% 0 15%;
    }

    .responsive-table .table-header {
        background-color: #95a5a6;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    .responsive-table .table-row {
        background-color: #fff;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }

    .responsive-table .col-1 {
        flex-basis: 25%;
    }

    .responsive-table .col-2 {
        flex-basis: 30%;
    }

    .responsive-table .col-3 {
        flex-basis: 11%;
    }

    .responsive-table .col-4 {
        flex-basis: 12%;
    }

    .responsive-table .col-5 {
        flex-basis: 12%;
    }
    .responsive-table .col-6 {
        flex-basis: 10%;
    }

    @media all and (max-width: 767px) {
        .responsive-table .table-header {
            display: none;
        }

        .responsive-table li {
            display: block;
        }

        .responsive-table .col {
            flex-basis: 80%;
        }

        .responsive-table .col {
            display: flex;
            padding: 10px 0;
        }

            .responsive-table .col:before {
                color: #6c7a89;
                padding-right: 10px;
                content: attr(data-label);
                flex-basis: 50%;
                text-align: right;
            }
    }
</style>