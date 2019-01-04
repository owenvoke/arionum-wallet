import Vue from 'vue'
import router from './config/router'
import BootstrapVue from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/js/all'
import 'jdenticon/dist/jdenticon'
import './config/registerServiceWorker'
import './config/store'
import './config/styles'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
