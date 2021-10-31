import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http=axios.create({
  baseURL:'http://localhost:3001/api'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')