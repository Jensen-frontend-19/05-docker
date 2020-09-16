<template>
    <div id="app">
        <ViewList></ViewList>
    </div>
</template>

<script>
import ViewList from './components/ViewList.vue'

export default {
    name: 'App',
    components: {
        ViewList
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
