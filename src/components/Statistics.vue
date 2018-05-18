<template>
    <div class="statistics">
        <h1 class="title is-1">Statistics</h1>

        <table class="table">
            <tbody>
            <tr>
                <td>
                    <span class="icon">
                       <i class="fas fa-wallet"></i>
                    </span>
                    <strong>Balance:</strong>
                </td>
                <td>
                    <span>{{ balance }}</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Network from '../modules/Network'

    export default {
        name: 'Statistics',
        data () {
            return {
                address: null,
                balance: null,

            }
        },
        mounted () {
            Network.getAddress(this.publicKey)
                .then((response) => { this.address = response.data })
                .then(() => {
                    Network.getBalance(this.address)
                        .then((response) => { this.balance = response.data })
                })
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
