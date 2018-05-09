<template>
    <div id="details">
        <h3 class="title is-3">Details</h3>

        <div class="box">
            <div class="field">
                <label class="label" for="details.address">Address</label>
                <input class="input" id="details.address" v-model="address"/>
            </div>
            <div class="field">
                <label class="label" for="details.publicKey">Public key</label>
                <input class="input" id="details.publicKey" v-model="publicKey"/>
            </div>
            <div class="field">
                <label class="label" for="details.privateKey">Private key</label>
                <input class="input" id="details.privateKey" v-model="privateKey"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Details',
        computed: {
            address: {
                get: function () {
                    return localStorage.getItem('wallet.address')
                },
                set: function (address) {
                    return localStorage.setItem('wallet.address', address)
                }
            },
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
