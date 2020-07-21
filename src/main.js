/**
 * @author songyao
 * Date: 2020/07/20
 */

import Vue from 'vue'
import Router from "./router/index.js"
import App from './App.vue'


import syui from "../packages"
Vue.use(syui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Router
}).$mount('#app')
