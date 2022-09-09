import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from './router'
import VueCookie from 'vue-cookie'
import './index.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import loadComponent from './utils/loadComponent';
import axios from 'axios';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
import {
  map,
  filter,
  reduce,
  array2tree
} from '/@/utils/flowUtils';

import {
  getAction,
  downloadAction,
  downloadFile,
  postAction,
  deleteAction,
  putAction,
} from "/@/request/http";

Vue.prototype.$moment = moment;
Vue.prototype.$axios = axios;
Vue.prototype.$getAction = getAction;
Vue.prototype.$downloadAction = downloadAction;
Vue.prototype.$downloadFile = downloadFile;
Vue.prototype.$postAction = postAction;
Vue.prototype.$deleteAction = deleteAction;
Vue.prototype.$putAction = putAction;

Vue.prototype.$getCssUnit = function(value) {
    if (isNaN(Number(value))) {
        return value;
    }
    return `${value}px`;
};
Vue.prototype.$map = map;
Vue.prototype.$filter = filter;
Vue.prototype.$reduce = reduce;
Vue.prototype.$array2tree = array2tree;

Vue.use(VueCookie)
Vue.use(ElementUI)
Vue.use(PiniaVuePlugin)
Vue.use(loadComponent);
const pinia = createPinia()

new Vue({
  render: (h) => h(App),
  pinia,
  router,
}).$mount('#app')
