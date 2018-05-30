<template>
  <div id="operations">
    <h1 class="title is-1">Operations</h1>

    <table class="table is-fullwidth is-striped">
      <thead>
      <tr>
        <th></th>
        <th>Date</th>
        <th>From Address</th>
        <th>Block Height</th>
        <th>Message</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="transaction in transactions" :key="transaction.id" class="transaction">
        <td class="t-info">
          <router-link :to="{ name: 'transaction', params: { transactionId: transaction.id }}">
            <i class="fas fa-info"></i>
          </router-link>
        </td>
        <td class="t-date">{{ helpers.getFormattedDate(transaction.date) }}</td>
        <td class="t-source">
          <a target="_blank" :href="helpers.getAddressLink(transaction.src)">{{ transaction.src }}</a>
        </td>
        <td class="t-block">
          <router-link :to="{ name: 'block', params: { blockHeight: transaction.height }}">
            <span>{{ transaction.height }}</span>
          </router-link>
        </td>
        <td class="t-message">{{ transaction.message }}</td>
        <td class="t-value">{{ transaction.val }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { privateKey, publicKey } from '../modules/Keys'
  import Network from '../modules/Network'
  import Helpers from '../modules/Helpers'

  export default {
    name: 'Operations',
    data () {
      return {
        address: null,
        helpers: Helpers,
        transactions: []
      }
    },
    mounted () {
      Network.getAddress(this.publicKey)
        .then(response => this.address = response.data)
        .then(() => {
          Network.getTransactions(this.address)
            .then(response => this.transactions = response.data)
        })
    },
    computed: {
      publicKey,
      privateKey
    }
  }
</script>

<style lang="scss" scoped></style>
