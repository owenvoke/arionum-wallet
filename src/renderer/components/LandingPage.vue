<template>
  <transition type="fade">
    <section class="section has-text-centered">
      <img class="logo" src="~@/assets/logo.svg" alt="Arionum">
      <div class="wallet-section">
        <h3 class="title is-3">Need a wallet?</h3>
        <button class="button is-success">Create a new wallet</button>
      </div>
      <div class="wallet-section">
        <h3 class="title is-3">Already have a wallet?</h3>
        <button class="button">Select wallet file</button>
        <button class="button">Enter keys manually</button>
      </div>
    </section>
  </transition>
</template>

<script>
  export default {
    name: 'landing-page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  .wallet-section {
    margin-bottom: 1rem;
    .button {
      margin-bottom: 0.1rem;
    }
  }
</style>
