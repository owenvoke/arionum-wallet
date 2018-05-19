<template>
  <div id="generateAddress">
    <div class="modal" :class="{ 'is-active': modalActive }" id="generateModal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Generate new address</p>
          <button class="delete" aria-label="close" @click="modalActive = false"></button>
        </header>
        <section class="modal-card-body">
          <p>Generating a new Arionum private and public key pair will overwrite any existing wallet stored in local
            storage.</p>
          <p>Please make sure that you have backed up any previous wallet data before clicking the
            <strong>confirm</strong> button.</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="generateAccount">Confirm</button>
          <button class="button" @click="modalActive=false">
            Cancel
          </button>
        </footer>
      </div>
    </div>

    <div class="field is-right">
      <button class="button is-warning is-pulled-right" @click="generateAccountModal">Generate account</button>
    </div>
  </div>
</template>

<script>
  import { publicKey, privateKey } from '../modules/Keys'
  import Network from '../modules/Network'

  export default {
    name: 'GenerateAddress',
    data () {
      return {
        modalActive: false
      }
    },
    methods: {
      generateAccountModal () {
        this.modalActive = true
      },
      generateAccount () {
        Network.generateAccount()
          .then((response) => {
            this.address = response.data.address
            this.publicKey = response.data.public_key
            this.privateKey = response.data.private_key
          })
          .then(() => {
            this.$router.go(0)
          })
      }
    },
    computed: {
      publicKey,
      privateKey
    }
  }
</script>

<style lang="scss" scoped></style>
