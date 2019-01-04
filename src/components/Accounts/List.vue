<template>
  <div class="account-list">
    <h4 class="heading is-size-4 text-uppercase">Accounts</h4>
    <div class="border rounded p-3">
      <div v-for="account in $aro.accounts" :key="account.address">
        <Account :address="account.address"></Account>
      </div>
      <p v-if="!$aro.accounts || $aro.accounts.length === 0" class="text-center">There are no accounts to show</p>
    </div>
  </div>
</template>

<script>
import Account from './Single'

export default {
  name: 'account-list',
  components: { Account }
}
</script>
