<template>
    <form method="post" class="form">
        <input type="text" class="name formEntry" v-model="form.email" v-on:click="form.email = ''"/>
        <input type="text" class="name formEntry" v-model="form.password" v-on:click="form.password = ''"/>
        <input type="button" class="submit formEntry" value="Submit" v-on:click="login" />

    </form>
</template>

<script>
    export default {
        name: 'my-login',
        data() {
            return {
                form: {
                    email: 'Enter e-mail',
                    password: 'Enter password'
                }
            }
        },

        methods: {
            login: async function() {
                let url = "https://localhost:44368/api/account/login";
                try {
                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(this.form), // Assumes data is in an object called form
                        headers: new Headers({
                            "Content-Type": "application/json"
                        })
                    });
                    if (response.ok) {
                        let token = await response.json();
                        localStorage.setItem("token", token.jwt);

                        this.$root.$emit('authorize')

                    } else {
                        alert("Server returned: " + response.statusText);
                    }
                } catch (err) {
                    alert("Error: " + err);
                }
                return;
            }
        }
    }
    
</script>

<style scoped>
</style>