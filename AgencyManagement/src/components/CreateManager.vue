<template>
    <h3>Create Manager </h3>
    <form>
        <div id="app">
            <input type="text" placeholder="Enter firstname" id="FirstName" name="FirstName" v-model="newmanager.FirstName"></input>
            <input type="text" placeholder="Enter lastname" id="LastName" name="LastName" v-model="newmanager.LastName"> </input>
            <input type="text" placeholder="Enter email" id="Email" name="Email" v-model="newmanager.Email"></input>

            <input type="button" value="Create Manager" id="createbtn" name="createbtn" v-on:click="PostManager" />
        </div>
    </form>
</template>

<script>
    export default {
        name: 'create-manager',
        data() {
            return {
                newmanager: {
                    FirstName: 'Enter FirstName',
                    LastName: 'Enter LastName',
                    Email: 'Enter Email'
                }
            }
            },
        methods:
        {
            PostManager: function () {
                let url = "https://localhost:44368/api/Managers";

                let temp = new EfManager(
                    {
                        Email = Email,
                        FirstName = FirstName,
                        LastName = LastName
                    });

                try {

                    let response = await fetch(url, {});
                    console.log(JSON.stringify(response));

                }
            }
        }
    }
</script>

<style scoped>
</style>