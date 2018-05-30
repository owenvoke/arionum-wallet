<template>
  <nav id="navbar" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.svg" alt="Arionum" class="navbar-logo">
        <div class="sub-text">Arionum Web Wallet</div>
      </router-link>
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
  .navbar {
    box-shadow: 0 0.04em lightgray;

    .navbar-brand {
      .sub-text {
        margin-left: 0.5em;
      }
      .navbar-logo {
        height: 24px;
      }
    }
  }
</style>
