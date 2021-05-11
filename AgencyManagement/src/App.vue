<template>
    <div id="app">
        <div id="nav">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item><router-link :to="'/login'">Login</router-link></b-nav-item>
                        <b-nav-item><router-link :to="'/CreateManager'">Manage</router-link></b-nav-item>
                        <b-nav-item><router-link :to="'/model'">Model</router-link></b-nav-item>
                        <img height="40" class="floatright" src="../Images/logo.png" />
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        
        <router-view id="content" />
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
                this.$router.push({ path: '/CreateManager' });
            }
        }
}
</script>
<style scoped>
    a {
        text-decoration: none;
        color: white;
        padding-left: 10px;
    }
    .floatright{
        float: right;
        padding-left: 50px;
    }
    b-navbar {
        text-align: center;
    }
</style>

<style>
    #content{
        padding-top: 20px;
        padding-left: 20px;
        background: Khaki;
    }

    html {
        background-color: khaki;
    }
</style>