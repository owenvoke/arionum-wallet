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
                    <input class="input" id="details.privateKey" v-model="privateKey"/>
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Network from '../modules/Network'

    export default {
        name: 'Settings',
        data () {
            return {
                address: null
            }
        },
        mounted () {
            Network.getAddress(this.publicKey)
                .then((response) => { this.address = response.data })
        },
        computed: {
            publicKey: {
                get: function () {
                    return localStorage.getItem('wallet.publicKey')
                },
                set: function (publicKey) {
                    return localStorage.setItem('wallet.publicKey', publicKey)
                }
            },
            privateKey: {
                get: function () {
                    return localStorage.getItem('wallet.privateKey')
                },
                set: function (privateKey) {
                    return localStorage.setItem('wallet.privateKey', privateKey)
                }
            }
        }
    }
</script>

<style lang="scss" scoped></style>
