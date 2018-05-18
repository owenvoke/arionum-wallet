export default {
  endpoints: {
    address: '/api.php?q=getAddress',
    balance: '/api.php?q=getPendingBalance'
  },

  getPeer () {
    return `https://aro.pxgamer.xyz`
  },
  getRequest (endpoint) {
    return fetch(this.getPeer() + endpoint)
      .then(response => { return response.json() })
      .catch(error => console.error('Request failed', error))
  },
  getBalance (account) {
    return this.getRequest(this.endpoints.balance+`&account=${account}`)
  },
  getAddress (publicKey) {
    return this.getRequest(this.endpoints.address+`&public_key=${publicKey}`)
  }
}
