<template>
  <div class="account-list">
    <h4 class="heading is-size-4 text-uppercase">Accounts</h4>
    <div class="border rounded p-3">
      <div class="details">
        <b-img rounded="circle" class="d-inline-block m-1" src="https://www.gravatar.com/avatar/369bfea86e43374e98de1b399994ec67?s=30&d=identicon"/>
        <div class="d-inline align-middle">
          <span class="text-monospace">51sJ4LbdKzhyGy4zJGqodNLse9n9JsVT2rdeH92w7cf3qQuSDJupvjbUT1UBr7r1SCUAXG97saxn7jt2edKb4v4J</span>
        </div>
      </div>
      <div class="mb-1">
        <span class="text-monospace balance">0.00044441 ARO</span>
      </div>
      <div class="actions">
        <b-button variant="light" class="mr-1">
          <i class="fas fa-ellipsis-h"></i>
        </b-button>
        <b-button variant="secondary">
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
