<template>
    <div>
        <NavBar></NavBar>
        <section class="section">
            <div class="container is-fluid">
                <Details></Details>
            </div>
        </section>
    </div>
</template>

<script>
    import NavBar from './components/NavBar'
    import Details from './components/Details'

    export default {
        name: 'app',
        components: {
            NavBar,
            Details
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
