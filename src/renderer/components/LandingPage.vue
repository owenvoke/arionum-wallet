<template>
  <transition type="fade">
    <div class="container">
      <section class="section has-text-centered">
        <img class="logo" src="~@/assets/logo.svg" alt="Arionum">
        <div class="options-box">
          <h4 class="title is-4">Get started with Arionum</h4>
          <a class="box has-text-left">
            <b-icon icon="plus" custom-class="fa-fw"></b-icon>
            <strong>Create a new wallet</strong>
          </a>
          <a class="box has-text-left">
            <b-icon icon="file" custom-class="fa-fw"></b-icon>
            <strong>Use an existing wallet file</strong>
          </a>
          <a class="box has-text-left">
            <b-icon icon="keyboard" custom-class="fa-fw"></b-icon>
            <strong>Use an existing wallet key pair</strong>
          </a>
          <a class="box has-text-left" @click="open('https://www.arionum.com')">
            <b-icon icon="external-link-alt" custom-class="fa-fw"></b-icon>
            <strong>Learn about Arionum</strong>
          </a>
        </div>
      </section>
    </div>
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

  .options-box {
    max-width: 40rem;
    margin: auto;
  }
</style>
