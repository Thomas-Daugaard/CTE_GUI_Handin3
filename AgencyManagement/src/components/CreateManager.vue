<template>
    <form class="form">
        <div>
            <input class="name formEntry" type="text" placeholder="Enter firstname" v-model="newmanager.firstName" />
        </div>
        <div>
            <input class="name formEntry" type="text" placeholder="Enter lastname" v-model="newmanager.lastName" />
        </div>
        <div>
            <input class="name formEntry" type="text" placeholder="Enter email" v-model="newmanager.email" />
        </div>
        <div>
            <input class="name formEntry" type="text" placeholder="Enter password" v-model="newmanager.password" />
        </div>
        <div>
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
                    email: '',
                    password:''
                }
            }
        },
        methods: {
            postmanager: async function () {
                let url = "https://localhost:44368/api/Managers";

                try {

                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(this.newmanager),
                        headers: new Headers({
                            "Authorization": "Bearer",
                            "Content-Type": "application/json"
                        })
                    });

                    if (response.ok) {
                        let token = await response.json();
                        localStorage.getItem("token", token.jwt);
                        this.$router.push('/CreateManager');
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