const publicKey = {
  get: function () {
    return window.localStorage.getItem('wallet.publicKey')
  },
  set: function (privateKey) {
    return window.localStorage.setItem('wallet.publicKey', privateKey)
  }
}
const privateKey = {
  get: function () {
    return localStorage.getItem('wallet.privateKey')
  },
  set: function (privateKey) {
    return localStorage.setItem('wallet.privateKey', privateKey)
  }
}

export { publicKey, privateKey }
