import Vue from 'vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/js/all'
import 'jdenticon/dist/jdenticon'
import './registerServiceWorker'
import './store'
import './styles'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
