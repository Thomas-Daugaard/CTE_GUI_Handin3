<template>
    <h3>Create Manager </h3>
    <form>
        <div>
            <input type="text" placeholder="Enter firstname" id="FirstName" name="FirstName" v-model="newmanager.FirstName"/>
            <input type="text" placeholder="Enter lastname" id="LastName" name="LastName" v-model="newmanager.LastName"/>
            <input type="text" placeholder="Enter email" id="Email" name="Email" v-model="newmanager.Email"/>

            <input type="button" value="Create Manager" id="createbtn" name="createbtn" v-on:click="postmanager" />
        </div>
    </form>
</template>

<script>
    new Vue({
        data: function () {
            return {
                newmanager: {
                    FirstName,
                    LastName,
                    Email
                }
            }
        },
        methods: {
            postmanager: function () {
                let url = "https://localhost:44368/api/Managers";

                try {

                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(this.efmanager),
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    });

                    if (response.ok) {
                        let token = await response.json();
                        localStorage.setItem("token", token.jwt);
                        // Change view to some other component // …
                    }
                    else {
                        alert("Server returned: " + response.statusText);
                    }
                }
                catch (err) {
                    alert("Error: " + err);
                }

            }
        })
   
</script>

<style scoped>
   
</style>