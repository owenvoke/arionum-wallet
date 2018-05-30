import 'datejs'

export default {
  getFormattedDate (date) {
    let d = new Date(0)
    d.setUTCSeconds(date)
    return d.toString('dd MMM yyyy HH:mm:ss')
  },
  getAddressLink (address) {
    return `//arionum.info/account/${address}`
  },
  getBlockLink (block) {
    return `//arionum.info/block/${block}`
  }
}
