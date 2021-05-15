<template>
    <div>
        <h1>Details about: {{model.firstName}} {{model.lastName}}</h1>
        <table>
            <tr>
                <th>Name</th>
                <th data-label="Name">{{model.firstName}} {{model.lastName}}</th>
            </tr>
            <tr>
                <th>Email</th>
                <th data-label="Email">{{model.email}}</th>
            </tr>
            <tr>
                <th>Phone Number</th>
                <th data-label="Phone Number">{{model.phoneNo}}</th>
            </tr>
            <tr>
                <th>Address</th>
                <th data-label="Address">{{model.addresLine1}} {{model.addresLine2}}</th>
            </tr>
            <tr>
                <th>Zip code</th>
                <th data-label="Zip code">{{model.zip}}</th>
            </tr>
            <tr>
                <th>City</th>
                <th data-label="City">{{model.city}}</th>
            </tr>
            <tr>
                <th>Country</th>
                <th data-label="Country">{{model.country}}</th>
            </tr>
            <tr>
                <th>Nationality</th>
                <th data-label="Nationality">{{model.nationality}}</th>
            </tr>
            <tr>
                <th>Height</th>
                <th data-label="Height">{{model.height}}</th>
            </tr>
            <tr>
                <th>Birth date</th>
                <th data-label="Birth date">{{model.birthDate}}</th>
            </tr>
            <tr>
                <th>Shoe size</th>
                <th data-label=">Shoe size">{{model.shoeSize}}</th>
            </tr>
            <tr>
                <th>Hair Color</th>
                <th data-label="Hair Color">{{model.hairColor}}</th>
            </tr>
            <tr>
                <th>Eye Color</th>
                <th data-label="Eye Color">{{model.eyeColor}}</th>
            </tr>
            <tr>
                <th>Comments</th>
                <th data-label="Comments">{{model.comments}}</th>
            </tr>
        </table>
   
    <router-link :to="'/models/index'"><input type="button" class="submit formEntry" value="Back to list" /></router-link>
    <br />
    </div>
</template>

<script>
    export default {
        name: 'model-details',
        props: ['modelid'],
        data() {
            return {
                model: null
            }
        },
        methods: {
            getModels: async function () {
                let url = "https://localhost:44368/api/models/" + this.modelid;

                await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer' + " " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })

                }).then(res => res.json())
                    .then(res => this.model = res)
                    .catch(error => alert("Error" + error));
                return;
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

    table {
        width: 30%;
        margin-left: 35%;
        margin-right: 35%;
        background-color: #95a5a6;
        border-top: 1px solid black
    }

    table tr {
        border-bottom: 1px solid black;
    }

    th{
        height: 50px;
        vertical-align: text-top;
        padding-left: 10px;
        padding-right: 10px;
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