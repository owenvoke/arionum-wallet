// App imports
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'
// Theme imports
import 'bulma'
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'

// Set up routing
const router = new VueRouter({
  routes
})
Vue.use(VueRouter)

// Disable the production warning
Vue.config.productionTip = false

// Initialise Vue
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
