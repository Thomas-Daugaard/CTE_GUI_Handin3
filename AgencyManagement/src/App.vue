<template>
    <div id="app">
        <div id="nav">
            <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" sticky="true">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item v-if="!authorize"><router-link :to="'/login'">Login</router-link></b-nav-item>
                        <b-nav-item v-if="authorize" v-on:click="logout"><router-link :to="'/index'">Logout</router-link></b-nav-item>
                        <b-nav-item v-if="authorize"><router-link :to="'/managers/create'">Managers</router-link></b-nav-item>
                        <b-nav-item v-if="authorize"><router-link :to="'/jobs/index'">Jobs</router-link></b-nav-item>
                        <b-nav-item v-if="authorize && isManager"><router-link :to="'/models/index'">Models</router-link></b-nav-item>
                        <router-link :to="'/index'">
                            <img height="40" class="floatright" src="../Images/logo.png" v-on:click="this.$router.push('Index')">
                        </router-link>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

        <router-view id="content" class="centerb" />


    </div>
</template>

<script>
    import login from './components/Login.vue'
    import createManager from './components/Managers/CreateManager.vue'
    import createModel from './components/Models/CreateModel.vue'
    import listModels from './components/Models/ListModels.vue'
    import createJob from './components/Jobs/CreateJob.vue'
    import listJobs from './components/Jobs/ListJobs.vue'
    import modelDetails from './components/Models/ModelDetails.vue'

    export default {
        name: 'app',
        components: {
            login,
            createManager,
            createModel,
            listModels,
            createJob,
            listJobs,
            modelDetails,

        },
        data() {
            return {
                authorize: false,
                isManager: false
            }
        },
        methods: {
            logout: function () {
                localStorage.removeItem("token");
                localStorage.removeItem("isManager");
                this.authorize = false;
                return;
            },
            receiveEvent: function () {
                this.$root.$on('authorize', () => {
                    this.authorize = true;
                    this.checkUser();
                })    
            },
            checkUser: function () {
                if (localStorage.getItem('isManager') == "true")
                    this.isManager = true;
                else
                    this.isManager = false;
            }
            },            
        mounted() {
            this.checkUser()
            this.receiveEvent()
        }
    }
    
</script>
<style scoped>
    h3 {
        text-align: center;
    }

    .responsive-image{
        width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;   
        color: white;
        padding-left: 10px;  
    }

    .floatright {
        float: right;
        margin-left: 60em;
    }

    b-navbar {
        text-align: center;
    }
</style>

<style>
    #content {
        padding-top: 20px;
        padding-left: 20px;
        background: khaki;
    }

    html {
        background-color: khaki;
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
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

    b-carousel-slide {
        width: 100%;
        height: auto;
    }
    
</style>