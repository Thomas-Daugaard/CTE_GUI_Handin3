<template>
    <form method="post" class="form">
        <input type="email" placeholder="Enter email" class="name formEntry" v-model="form.email" v-on:click="form.email = ''"/>
        <input type="password" placeholder="Enter password" class="name formEntry" v-model="form.password" v-on:click="form.password = ''"/>
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
                        localStorage.removeItem("email");
                        localStorage.setItem("email", this.form.email);
                        this.checkUser();
                        this.$root.$emit('authorize');
                        this.$router.push('Index');

                    } else {
                        alert("Server returned: " + response.statusText);
                    }
                } catch (err) {
                    alert("Error: " + err);
                }

                return;
            },
            checkUser: function () {
                var token = this.parseJwt();

                var userType = token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

                if (userType == "Manager") {
                    this.isManager = true;
                    localStorage.setItem("isManager", true);
                }

                else {
                    this.isManager = false;
                    localStorage.setItem("isManager", false);
                }
            },
            parseJwt() {
                var token = localStorage.getItem("token");
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                return JSON.parse(jsonPayload);
            },
        }
    }
    
</script>

<style scoped>
</style>