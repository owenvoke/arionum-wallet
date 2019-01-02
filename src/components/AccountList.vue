<template>
  <div class="account-list">
    <h4 class="heading is-size-4 text-uppercase">Accounts</h4>
    <div class="border rounded-1">
      <div class="d-inline">
        <div
          style="width: 30px; height: 30px; background: url('https://www.gravatar.com/avatar/369bfea86e43374e98de1b399994ec67?s=30&d=identicon&r=PG'); border-radius: 50%; position: relative;background-size: cover;"
          class="d-inline-block m-1"></div>
        <div class="d-inline align-top text-monospace">
          <span>51sJ4LbdKzhyGy4zJGqodNLse9n9JsVT2rdeH92w7cf3qQuSDJupvjbUT1UBr7r1SCUAXG97saxn7jt2edKb4v4J</span>
        </div>
      </div>
    </div>
    <div class="mb-1">
      <span class="text-monospace">0.00044441 ARO</span>
    </div>
    <div>
      <div class="btn-group">
        <button tabindex="0" type="button" class="btn btn-light"><i
          class="fas fa-ellipsis-h"></i></button>
      </div>
      <div class="btn-group">
        <button tabindex="0" type="button" class="btn btn-secondary">
          <span>Send</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'account-list'
}
</script>
