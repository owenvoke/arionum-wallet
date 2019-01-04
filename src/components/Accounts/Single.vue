<template>
  <div class="account">
    <div class="details d-block align-middle text-monospace text-truncate">
      <svg class="d-inline-block m-1 rounded bg-light" width="38" height="38" :data-jdenticon-value="account.address"></svg>
      <span v-text="account.address"></span>
    </div>
    <div class="additional-details d-inline-block mt-1">
      <b-button disabled size="sm" class="text-monospace balance mr-3">0.00044441 ARO</b-button>
      <b-dropdown size="sm" variant="outline-dark">
        <template slot="button-content">
          <i class="fas fa-ellipsis-h fa-fw"></i>
        </template>
        <b-dropdown-item-button>
          <i class="fas fa-save fa-fw mr-1"></i>
          <span>Export</span>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <i class="fas fa-print fa-fw mr-1"></i>
          <span>Print</span>
        </b-dropdown-item-button>
      </b-dropdown>
      <b-button v-if="account.privateKey && account.publicKey" variant="secondary" size="sm">
        <span>Send</span>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'account',
  props: {
    account: Object
  }
}
</script>
