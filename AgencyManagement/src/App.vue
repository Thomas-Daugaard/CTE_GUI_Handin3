<template>
    <div id="app">
        <div id="nav">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item><router-link :to="'/login'">Login</router-link></b-nav-item>
                        <b-nav-item><router-link :to="'/manage'">Manage</router-link></b-nav-item>
                        <b-nav-item><router-link :to="'/model'">Model</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import createManager from './components/CreateManager.vue'
    import myLogin from './components/MyLogin.vue'
    import newModel from './components/NewModel.vue'

export default {
  name: 'app',
  components: {
    createManager,
    myLogin,
    newModel
        },
        methods: {
            login: function () {
                this.$router.push({ name: 'Login' });
            },
            createManager: function () {
                this.$router.push({ path: '/manage' });
            }
        }
}
</script>
<style scoped>
    .mynavbar {
        background: black;
        color: black;
    }
</style>