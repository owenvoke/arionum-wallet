<template>
    <div>
        <NavBar></NavBar>
        <section class="section">
            <div class="container is-fluid">
                <Settings></Settings>
            </div>
        </section>
    </div>
</template>

<script>
    import NavBar from './components/NavBar'
    import Settings from './components/Settings'

    export default {
        name: 'app',
        components: {
            NavBar,
            Settings
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
