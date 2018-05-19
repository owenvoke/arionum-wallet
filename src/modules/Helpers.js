import 'datejs'

export default {
  getFormattedTransactionDate (date) {
    let d = new Date(0)
    d.setUTCSeconds(date)
    return d.toString('dS MMM yyyy HH:mm:s')
  },
  getAddressLink (address) {
    return `//arionum.info/account/${address}`
  },
  getBlockLink (block) {
    return `//arionum.info/block/${block}`
  }
}
