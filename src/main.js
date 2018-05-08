import Vue from 'vue'
import App from './App.vue'
import bulma from 'bulma'
import fontAwesome from '@fortawesome/fontawesome'
import fontAwesomeFree from '@fortawesome/fontawesome-free-solid'

// eslint-disable-next-line
let forceIgnoreUnusedVariables = {bulma, fontAwesome, fontAwesomeFree}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
