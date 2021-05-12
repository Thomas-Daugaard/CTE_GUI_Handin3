<template>
    <div id="app">
        <div id="nav">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item v-if="!authorize"><router-link :to="'/login'">Login</router-link></b-nav-item>
                        <b-nav-item v-if="authorize" v-on:click="logout">Logout</b-nav-item>
                        <b-nav-item v-if="authorize"><router-link :to="'/CreateManager'">Manage</router-link></b-nav-item>
                        <b-nav-item v-if="authorize"><router-link :to="'/Job'">Jobs</router-link></b-nav-item>
                        <b-nav-item v-if="authorize"><router-link :to="'/model'">Model</router-link></b-nav-item>
                        <img height="40" class="floatright" src="../Images/logo.png" />
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

        <router-view id="content" />
    </div>
</template>

<script>
    import myjobs from './components/Job.vue'
    import createManager from './components/CreateManager.vue'
    import myLogin from './components/MyLogin.vue'
    import newModel from './components/NewModel.vue'
    export default {
        name: 'app',
        components: {
            createManager,
            myLogin,
            newModel,
            myjobs
        },
        data() {
            return {
                authorize: false
            }
        },
        methods: {
            logout: function () {
                localStorage.removeItem("token");
                this.authorize = false;
                return;
            }
        },
        mounted() {
            this.$root.$on('authorize', () => 
                this.authorize = true
            )
        }
    }
    
</script>
<style scoped>
    a {
        text-decoration: none;
        color: white;
        padding-left: 10px;
    }

    .floatright {
        float: right;
        padding-left: 50px;
    }

    b-navbar {
        text-align: center;
    }
</style>

<style>
    #content {
        padding-top: 20px;
        padding-left: 20px;
        background: seagreen;
    }

    html {
        background-color: khaki;
    }

    input {
        background-color: white;
        color: black;
        padding: 5px 5px 5px 5px;
    }

    #btn {
    }

    .form {
        background: #fff;
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
        border-radius: 5px;
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 5px;
        padding-bottom: 5px;
        left: 0;
        right: 0;
        position: absolute;
        border-top: 5px solid #0e3721;
        /*   z-index: 1; */
        animation: bounce 1.5s infinite;
    }

    .name {
        background-color: #ebebeb;
        color: black;
    }

        .name:hover {
            border-bottom: 5px solid #0e3721;
            height: 45px;
            width: 380px;
            transition: ease 0.6s;
        }

    .submit {
        width: 200px;
        color: white;
        background-color: black;
        font-size: 20px;
    }

        .submit:hover {
            box-shadow: 15px 15px 15px 5px rgba(78, 72, 77, 0.219);
            transform: translateY(-3px);
            width: 300px;
            border-top: 5px solid #0e3750;
            border-radius: 0%;
        }

    .formEntry {
        display: block;
        margin: 30px auto;
        min-width: 300px;
        padding: 10px;
        border-radius: 2px;
        border: none;
        transition: all 0.5s ease 0s;
    }

    @keyframes bounce {
        0% {
            tranform: translate(0, 4px);
        }

        50% {
            transform: translate(0, 8px);
        }
    }
</style>