<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="./">
                <img src="../assets/logo.svg" alt="" height="auto" width="28">
                <div class="sub-text">Arionum Web Wallet</div>
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-end">
            <router-link class="navbar-item" to="/settings">Settings</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style lang="scss" scoped>
    .navbar-brand {
        .sub-text {
            margin-left: 0.5em;
        }
    }
</style>
