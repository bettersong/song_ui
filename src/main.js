/**
 * @author songyao
 * Date: 2020/07/20
 */

import Vue from 'vue'
import router from "./router/index.js"
import App from './App.vue'


import syUI from "../packages"
Vue.use(syUI)

Vue.config.productionTip = false
console.log(router,77)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
