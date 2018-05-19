<template>
    <div class="statistics">
        <h1 class="title is-1">Operations</h1>

        <table class="table">
            <thead>
            <tr>
                <th>Date</th>
                <th>From Address</th>
                <th>Block Height</th>
                <th>Message</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id" class="transaction">
                <td class="t-date">{{ helpers.getFormattedTransactionDate(transaction.date) }}</td>
                <td class="t-source">
                    <a target="_blank" :href="helpers.getAddressLink(transaction.src)">{{ transaction.src }}</a>
                </td>
                <td class="t-block">
                    <a target="_blank" :href="helpers.getBlockLink(transaction.block)">
                        {{ transaction.height }}
                    </a>
                </td>
                <td class="t-message">{{ transaction.message }}</td>
                <td class="t-value">{{ transaction.val }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
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
                .then((response) => { this.address = response.data })
                .then(() => {
                    Network.getTransactions(this.address)
                        .then((response) => { this.transactions = response.data })
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

<style lang="scss" scoped>
    .transaction {
        font-size: 0.8em;
    }
</style>
