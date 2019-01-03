<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="navCollapse"></b-navbar-toggle>
    <b-navbar-brand to="/"><span class="text-info">Arionum</span> Wallet</b-navbar-brand>

    <b-collapse is-nav id="navCollapse">

      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <b-button size="sm" variant="secondary">Settings</b-button>
        </b-nav-item>
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</template>
