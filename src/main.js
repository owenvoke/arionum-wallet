import Vue from 'vue'
import router from './config/router'
import '@fortawesome/fontawesome-free/js/all'
import 'jdenticon/dist/jdenticon'
import './config/registerServiceWorker'
import './config/store'
import './config/styles'
import App from './App.vue'
import Aro from './config/app'

Vue.config.productionTip = false
Vue.prototype.$aro = Vue.$aro = Aro

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
