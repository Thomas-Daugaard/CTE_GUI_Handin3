<template>
    <div id="app">
        <b-navbar class="mynavbar" toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand class="mylink" href="login">Login</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                    <b-nav-item href="createManager">Create Manager</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<div id="main">

</div>

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