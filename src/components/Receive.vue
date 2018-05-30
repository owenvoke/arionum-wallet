<template>
  <div id="receive">
    <h1 class="title is-1">Receive</h1>

    <form>
      <div class="field">
        <label for="requestAddress" class="label">Address</label>
        <p class="control has-icons-left">
          <input disabled class="input" id="requestAddress" :value="address"/>
          <span class="icon is-small is-left">
            <i class="fas fa-address-book"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <label for="requestValue" class="label">Payment value</label>
        <p class="control has-icons-left">
          <input class="input" id="requestValue" v-model="value" type="number"
                 @change="createRequestQr"/>
          <span class="icon is-small is-left">
            <i class="fas fa-coins"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <label for="requestMessage" class="label">Message</label>
        <p class="control has-icons-left">
          <input class="input" id="requestMessage" v-model="message"
                 @change="createRequestQr"/>
          <span class="icon is-small is-left">
            <i class="fas fa-comment-alt"></i>
          </span>
        </p>
      </div>
    </form>

    <hr/>

    <div class="box">
      <img id="generated-qr" :src="generatedQr"/>
    </div>
  </div>
</template>

<script>
  import QRCode from 'qrcode'
  import { privateKey, publicKey } from '../modules/Keys'
  import Network from '../modules/Network'

  export default {
    name: 'Receive',
    data () {
      return {
        address: 'Unknown',
        value: 0,
        message: '',
        generatedQr: null
      }
    },
    mounted () {
      Network.getAddress(this.publicKey)
        .then(response => this.address = response.data)
    },
    computed: {
      publicKey,
      privateKey
    },
    methods: {
      createRequestQr () {
        QRCode.toDataURL(
          `arosend|${this.address}|${this.value}|${this.message}`,
          (err, url) => {
            this.generatedQr = url
          }
        )
      }
    }
  }
</script>

<style lang="scss" scoped></style>
