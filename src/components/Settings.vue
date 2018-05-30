<template>
  <div id="settings">
    <h3 class="title is-3">Settings</h3>

    <div class="box">
      <div class="field">
        <label class="label" for="details.address">Address</label>
        <p class="control has-icons-left">
          <input disabled class="input" id="details.address" :value="address"/>
          <span class="icon is-small is-left">
            <i class="fas fa-address-book"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label" for="details.publicKey">Public key</label>
        <p class="control has-icons-left">
          <input class="input" id="details.publicKey" v-model="publicKey"/>
          <span class="icon is-small is-left">
            <i class="fas fa-lock-open"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label" for="details.privateKey">Private key</label>
        <p class="control has-icons-left">
          <input class="input is-danger" id="details.privateKey" v-model="privateKey"/>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
        <p class="help">Please make sure you have a backup of the private key.</p>
      </div>
    </div>

    <generate-address></generate-address>
  </div>
</template>

<script>
  import { privateKey, publicKey } from '../modules/Keys'
  import Network from '../modules/Network'
  import GenerateAddress from './GenerateAddress'

  export default {
    name: 'Settings',
    components: {GenerateAddress},
    data () {
      return {
        address: null
      }
    },
    mounted () {
      Network.getAddress(this.publicKey)
        .then(response => this.address = response.data)
    },
    computed: {
      publicKey,
      privateKey
    }
  }
</script>

<style lang="scss" scoped></style>
