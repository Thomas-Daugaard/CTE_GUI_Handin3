<template>
    <div>
        <!--<h1>All Models</h1>
        <ul class="responsive-table">
            <li class="table-header">
                <div class="col col-1">Name</div>
                <div class="col col-1">Email</div>
                <div class="col col-1">Phone Number</div>
                <div class="col col-1">Address</div>
                <div class="col col-1">Zip code</div>
                <div class="col col-1">City</div>
                <div class="col col-1">Country</div>
                <div class="col col-1">Nationality</div>
                <div class="col col-1">Height</div>
                <div class="col col-2">Birth date</div>
                <div class="col col-3">Shoe size</div>
                <div class="col col-4">Hair Color</div>
                <div class="col col-5">Eye Color</div>
                <div class="col col-5">Comments</div>
            </li>
            <li class="table-row" v-for="(model, index) in models" :key="index">
                <div class="col col-1" data-label="Name">{{model.firstName}} {{model.lastName}}</div>
                <div class="col col-2" data-label="Email">{{model.email}}</div>
                <div class="col col-2" data-label="Phone Number">{{model.phoneNo}}</div>
                <div class="col col-2" data-label="Address">{{model.addresLine1}} {{model.addresLine2}}</div>
                <div class="col col-2" data-label="Zip code">{{model.zip}}</div>
                <div class="col col-2" data-label="City">{{model.city}}</div>
                <div class="col col-2" data-label="Country">{{model.country}}</div>
                <div class="col col-2" data-label="Nationality">{{model.nationality}}</div>
                <div class="col col-2" data-label="Height">{{model.height}}</div>
                <div class="col col-2" data-label="Birth date">{{model.birthDate}}</div>
                <div class="col col-3" data-label=">Shoe size">{{model.shoeSize}}</div>
                <div class="col col-4" data-label="Hair Color">{{model.hairColor}}</div>
                <div class="col col-5" data-label="Eye Color">{{model.eyeColor}}</div>
                <div class="col col-2" data-label="Comments">{{model.comments}}</div>
            </li>
        </ul>
        <router-link :to="'/models/create'"><input type="button" class="submit formEntry" value="New Model" /></router-link>
        <br />-->

        <h1>{{test}}</h1>

    </div>
</template>

<script>
    export default {
        name: 'model-details',
        data() {
            return {
                models: [],
                test: 'hej'
            }
        },
        created() {
            this.$root.$on('modelId', this.setModelId)
        },
        methods: {
            getModels: async function (id) {
                let url = "https://localhost:44368/api/models/" + id;

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
            },
            setModelId(id) {
                this.test = id;
            },
        },
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