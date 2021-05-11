<template>
    <div id="app">
        <div id="main">
            <nav-menu></nav-menu>
            <!--<posts></posts>-->
            <router-view></router-view>
        </div>
        <page-footer></page-footer>
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
}
</script>