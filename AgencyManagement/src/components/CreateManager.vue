<template>
    <form class="form">
        <div>
            <input class="name formEntry" type="text" placeholder="Enter firstname" v-model="newmanager.FirstName" />
        </div>
        <div >
            <input class="name formEntry" type="text" placeholder="Enter lastname" v-model="newmanager.LastName" />
        </div>
        <div >
            <input class="name formEntry" type="text" placeholder="Enter email" v-model="newmanager.Email" />
        </div>
        <div >
            <input class="submit formEntry" type="button" value="Create Manager" name="createbtn" v-on:click="postmanager" />
        </div>
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
</style>