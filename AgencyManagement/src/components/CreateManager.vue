<template>
    <div id="app">
        <h3>Create Manager </h3> 
        <input type="text" id="FirstName" name="FirstName">{{FirstName}}</input>
        <input type="text" id="LastName" name="LastName">{{LastName}} </input>
        <input type="text" id="Email" name="Email">{{Email}} </input>

        <input type="button" value="Create Manager" id="createbtn" name="createbtn" v-on:click="PostManager"/>
    </div>
</template>

<script>
    new Vue({
        el: '#app'
        data: {
            FirstName: 'FirstName',
            LastName: 'LastName',
            Email: 'Email'
        }
        methods:
        {
            PostManager: function(){
                let url = "https://localhost:44368/api/Managers";

                try{

                }

            }
        });
   
</script>

<style scoped>
</style>