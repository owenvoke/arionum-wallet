<template>
  <div class="account-list">
    <h4 class="heading is-size-4 text-uppercase">Accounts</h4>
    <div class="border rounded p-3">
      <div class="details d-block align-middle text-monospace text-truncate">
        <svg class="d-inline-block m-1 rounded-circle" width="38" height="38" data-jdenticon-value="51sJ4LbdKzhyGy4zJGqodNLse9n9JsVT2rdeH92w7cf3qQuSDJupvjbUT1UBr7r1SCUAXG97saxn7jt2edKb4v4J"></svg>
        <span>51sJ4LbdKzhyGy4zJGqodNLse9n9JsVT2rdeH92w7cf3qQuSDJupvjbUT1UBr7r1SCUAXG97saxn7jt2edKb4v4J</span>
      </div>
      <div class="mb-1">
        <span class="text-monospace balance">0.00044441 ARO</span>
      </div>
      <div class="actions btn-group">
        <b-dropdown size="sm" variant="outline-dark" no-caret>
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
        <b-button variant="secondary" size="sm">
          <span>Send</span>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'account-list'
}
</script>
