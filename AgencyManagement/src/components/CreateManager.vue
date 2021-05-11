<template>
    <form>
            <input type="text" placeholder="Enter firstname" v-model="newmanager.FirstName"/>
            <input type="text" placeholder="Enter lastname" v-model="newmanager.LastName"/>
            <input type="text" placeholder="Enter email" v-model="newmanager.Email"/>

            <input type="button" value="Create Manager" id="createbtn" name="createbtn" v-on:click="postmanager" />
    </form>
</template>

<script>
    export default {
        name: 'create-manager',
        data() {
            return {
                newmanager: {
                    firstName: '',
                    lastName: '',
                    email: ''
                }
            }
        },
        methods: {
            postmanager: async function () {
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
        }
    }
   
</script>

<style scoped>
   input{background-color:black; color:white}
</style>