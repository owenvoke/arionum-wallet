<template>
  <div id="transaction">
    <h1 class="title is-1">Transaction</h1>

    <table class="table is-fullwidth">
      <tbody class="transaction">
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-address-book"></i>
          </span>
          <strong>Transaction id</strong>
        </td>
        <td>
          <span>{{ transactionId }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-wallet"></i>
          </span>
          <strong>Amount</strong>
        </td>
        <td>
          <span>{{ transactionData.val }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-hand-holding-usd"></i>
          </span>
          <strong>Fee</strong>
        </td>
        <td>
          <span>{{ transactionData.fee }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-cog"></i>
          </span>
          <strong>Type</strong>
        </td>
        <td>
          <span>{{ transactionData.type === 'credit' ? 'Incoming' : 'Outgoing' }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-calendar"></i>
          </span>
          <strong>Date</strong>
        </td>
        <td>
          <span>{{ helpers.getFormattedDate(transactionData.date) }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-link"></i>
          </span>
          <strong>Block</strong>
        </td>
        <td>
          <span>{{ transactionData.block }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
          <strong>Confirmations</strong>
        </td>
        <td>
          <span>{{ transactionData.confirmations }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-comment-alt"></i>
          </span>
          <strong>Message</strong>
        </td>
        <td>
          <span>{{ transactionData.message }}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { publicKey, privateKey } from '../modules/Keys'
  import Network from '../modules/Network'
  import Helpers from '../modules/Helpers'

  export default {
    name: 'Transaction',
    data () {
      return {
        address: 'Unknown',
        helpers: Helpers,
        transactionId: this.$route.params.transactionId,
        transactionData: {}
      }
    },
    mounted () {
      Network.getAddress(this.publicKey)
        .then((response) => { this.address = response.data })
        .then(() => {
          Network.getTransaction(this.$route.params.transactionId)
            .then((response) => { this.transactionData = response.data })
        })
    },
    computed: {
      publicKey,
      privateKey
    }
  }
</script>

<style lang="scss" scoped>
  .transaction {
    font-size: 0.8em;
  }
</style>
