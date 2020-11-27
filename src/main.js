import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'jquery'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/css.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
