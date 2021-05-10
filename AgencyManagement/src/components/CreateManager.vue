<template>
    <div id="app">
        <h3>Create Manager </h3> 
        <input type="text" id="FirstName" name="FirstName">{{FirstName}}</input>
        <input type="text" id="LastName" name="LastName">{{LastName}} </input>
        <input type="text" id="Email" name="Email">{{Email}} </input>
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
    });
   
</script>

<style scoped>
</style>