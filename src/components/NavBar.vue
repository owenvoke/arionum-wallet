<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="./">
        <img src="../assets/logo.svg" alt="" height="auto" width="28">
        <div class="sub-text">Arionum Web Wallet</div>
      </a>
    </div>

    <div class="navbar-end">
      <router-link class="navbar-item" to="/operations">
        <span class="icon">
          <i class="fas fa-credit-card"></i>
        </span>
        <span>Operations</span>
      </router-link>
      <router-link class="navbar-item" to="/receive">
        <span class="icon">
          <i class="fas fa-level-down-alt"></i>
        </span>
        <span>Receive</span>
      </router-link>
      <router-link class="navbar-item" to="/settings">
        <span class="icon">
          <i class="fas fa-sliders-h"></i>
        </span>
        <span>Settings</span>
      </router-link>
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
