import Vue from 'vue'
import axios from 'axios'
import Buefy from 'buefy'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma/css/bulma.css'
import 'buefy/dist/buefy.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// Vue plugins
Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

/* eslint-disable no-new */
new Vue({
  components: {App},
  router,
  store,
  template: '<App/>'
}).$mount('#app')
