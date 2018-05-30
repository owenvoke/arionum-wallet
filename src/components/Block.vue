<template>
  <div id="block">
    <h1 class="title is-1">Block</h1>

    <table class="table is-fullwidth">
      <tbody class="transaction">
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-address-book"></i>
          </span>
          <strong>Block id</strong>
        </td>
        <td>
          <span>{{ blockData.id }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-user"></i>
          </span>
          <strong>Generator</strong>
        </td>
        <td>
          <span>{{ blockData.generator }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-arrow-circle-up"></i>
          </span>
          <strong>Height</strong>
        </td>
        <td>
          <span>{{ blockData.height }}</span>
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
          <span>{{ helpers.getFormattedDate(blockData.date) }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
          <strong>Nonce</strong>
        </td>
        <td>
          <span>{{ blockData.nonce }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-sign"></i>
          </span>
          <strong>Signature</strong>
        </td>
        <td>
          <span>{{ blockData.signature }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-money-check"></i>
          </span>
          <strong>Transactions</strong>
        </td>
        <td>
          <span>{{ blockData.transactions }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-crosshairs"></i>
          </span>
          <strong>Difficulty</strong>
        </td>
        <td>
          <span>{{ blockData.difficulty }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon">
            <i class="fas fa-align-center"></i>
          </span>
          <strong>Argon</strong>
        </td>
        <td>
          <span>{{ blockData.argon }}</span>
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
    name: 'Block',
    data () {
      return {
        address: 'Unknown',
        helpers: Helpers,
        blockHeight: this.$route.params.blockHeight,
        blockData: {}
      }
    },
    mounted () {
      Network.getAddress(this.publicKey)
        .then(response => this.address = response.data)
        .then(() => {
          Network.getBlock(this.$route.params.blockHeight)
            .then(response => this.blockData = response.data)
        })
    },
    computed: {
      publicKey,
      privateKey
    }
  }
</script>

<style lang="scss" scoped></style>
