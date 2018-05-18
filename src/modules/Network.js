export default {
  endpoints: {
    address: '/api.php?q=getAddress',
	base58: '/api.php?q=base58',
    balance: '/api.php?q=getBalance',
	pendingBalance: '/api.php?q=getPendingBalance',
	transactions: '/api.php?q=getTransactions'
  },

  getPeer () {
    return process.env.VUE_APP_NODE_URL
  },
  getRequest (endpoint) {
    return fetch(this.getPeer() + endpoint)
      .then(response => { return response.json() })
      .catch(error => console.error('Request failed', error))
  },
  getAddress (publicKey) {
    return this.getRequest(this.endpoints.address+`&public_key=${publicKey}`)
  },
  getBase58 (data) {
    return this.getRequest(this.endpoints.base58+`&data=${data}`)
  },
  getBalance (account) {
    return this.getRequest(this.endpoints.balance+`&account=${account}`)
  },
  getPendingBalance (account) {
    return this.getRequest(this.endpoints.pendingBalance+`&account=${account}`)
  },
  getTransactions (account) {
    return this.getRequest(this.endpoints.transactions+`&account=${account}`)
  }
}
