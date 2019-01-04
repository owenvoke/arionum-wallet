import Vue from 'vue'

// Add default settings here
const defaultSettings = {
  node: {
    uri: 'http://peer1.arionum.com'
  }
}

// Import settings from localStorage
let localSettings = Vue.ls.get('settings') ? JSON.parse(Vue.ls.get('settings')) : {}

// Merge settings (prioritise local)
let settings = { ...defaultSettings, ...localSettings }

// Import accounts from local storage
let accounts = Vue.ls.get('acccounts') ? JSON.parse(Vue.ls.get('acccounts')) : {}

// Save accounts to local storage
function saveAccounts () {
  Vue.ls.set('accounts', JSON.stringify(accounts))
}

// Save settings to local storage
function saveSettings () {
  Vue.ls.set('settings', JSON.stringify(settings))
}

export default {
  accounts,
  saveAccounts,
  saveSettings,
  settings
}
