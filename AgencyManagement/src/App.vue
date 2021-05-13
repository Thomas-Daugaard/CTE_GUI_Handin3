<template>
    <div id="app">
        <div id="nav">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item v-if="!authorize" v-on:click="carousel = false"><router-link :to="'/login'">Login</router-link></b-nav-item>
                        <b-nav-item v-if="authorize" v-on:click="logout"><router-link :to="'/'">Logout</router-link></b-nav-item>
                        <b-nav-item v-if="authorize" v-on:click="carousel = false"><router-link :to="'/managers/create'">Managers</router-link></b-nav-item>
                        <b-nav-item v-if="authorize" v-on:click="carousel = false"><router-link :to="'/jobs/index'">Jobs</router-link></b-nav-item>
                        <b-nav-item v-if="authorize" v-on:click="carousel = false"><router-link :to="'/models/index'">Models</router-link></b-nav-item>
                        <router-link :to="'/'">
                            <img height="40" class="floatright" src="../Images/logo.png" v-on:click="carousel = true">
                        </router-link>

                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

        <carousel>
            <slide data-index="0"
                   data-name="MySlideName"
                   @slideclick="handleSlideClick">
                Slide 1 Content
            </slide>
        </carousel>

        <div class="my-carousel" v-if="carousel">
            <carousel-3d style="margin:0; padding-top: 40px; max-height: 400px; height: 400px;" class="carousel-3d">
                <slide class="slide" :index="0">
                    <h3>See our beautiful models</h3>
                    <img src="https://theblondesalad.com/wp-content/uploads/2020/09/armina900-585x878.jpg" height="280" />

                </slide>
                <slide :index="1">
                    <h3>You won't be disappointed</h3>
                    <img src="https://i.imgur.com/Z88kTKE.png" height="280" />
                </slide>
            </carousel-3d>
        </div>

        <router-view id="content" />
    </div>
</template>

<script>
    import login from './components/Login.vue'
    import createManager from './components/Managers/CreateManager.vue'
    import createModel from './components/Models/CreateModel.vue'
    import listModels from './components/Models/ListModels.vue'
    import createJob from './components/Jobs/CreateJob.vue'
    import listJobs from './components/Jobs/ListJobs.vue'
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'app',
        components: {
            login,
            createManager,
            createModel,
            listModels,
            createJob,
            listJobs,
            Carousel,
            Slide
        },
        data() {
            return {
                authorize: false,
                carousel: false
            }
        },
        methods: {
            logout: function () {
                localStorage.removeItem("token");
                this.authorize = false;
                this.carousel = true;
                return;
            },
            handleSlideClick(dataset) => {
        console.log(dataset.index, dataset.name)
        },
        mounted() {
            this.$root.$on('authorize', () => 
                this.authorize = true
            )
        }
    }
    
</script>
<style scoped>
    .my-carousel {
        background-color: khaki;
    }

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
        background: khaki;
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

    b-carousel-slide {
        width: 100%;
        height: auto;
    } 
</style>