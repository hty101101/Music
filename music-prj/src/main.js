import Vue from 'vue'
import App from './App.vue'
import './assets/css/resets.css'
import fastClick from 'fastclick'
import router from './router/router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VueAxios,Axios)
fastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
