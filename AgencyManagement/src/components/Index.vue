<template>
        <div id="nav">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item><router-link :to="'/login'">Login</router-link></b-nav-item>
                        <b-nav-item><router-link :to="'/CreateManager'">Manage</router-link></b-nav-item>
                        <b-nav-item><router-link :to="'/model'">Model</router-link></b-nav-item>
                        <img height="40" class="floatright" src="../../Images/logo.png" />
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
</template>

<script>
    export default {
        name: 'my-login',
        data() {
            }
        }
</script>

<style scoped>
</style>