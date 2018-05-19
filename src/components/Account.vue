<template>
  <div class="account">
    <h1 class="title is-1">Account</h1>

    <table class="table is-fullwidth">
      <tbody>
      <tr>
        <td>
                    <span class="icon">
                       <i class="fas fa-address-book"></i>
                    </span>
          <strong>Address</strong>
        </td>
        <td>
          <span>{{ address }}</span>
        </td>
      </tr>
      <tr>
        <td>
                    <span class="icon">
                       <i class="fas fa-wallet"></i>
                    </span>
          <strong>Balance</strong>
        </td>
        <td>
          <span>{{ balance }}</span>
        </td>
      </tr>
      <tr>
        <td>
                    <span class="icon">
                       <i class="fas fa-arrow-alt-circle-up"></i>
                    </span>
          <strong>Node version</strong>
        </td>
        <td>
          <span>{{ version }}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { publicKey, privateKey } from '../modules/Keys'
  import Network from '../modules/Network'

  export default {
    name: 'Account',
    data () {
      return {
        address: 'Unknown',
        balance: 'Unknown',
        network: Network,
        version: 'Unknown'
      }
    },
    mounted () {
      Network.getAddress(this.publicKey)
        .then((response) => { this.address = response.data })
        .then(() => {
          Network.getBalance(this.address)
            .then((response) => { this.balance = response.data })
        })
        .then(() => {
          Network.version()
            .then((response) => { this.version = response.data })
        })
    },
    computed: {
      publicKey,
      privateKey
    }
  }
</script>

<style lang="scss" scoped></style>
