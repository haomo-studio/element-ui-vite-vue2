import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from './router'
import VueCookie from 'vue-cookie'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueCookie)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  render: (h) => h(App),
  pinia,
  router,
}).$mount('#app')
