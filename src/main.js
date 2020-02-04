import Vue from 'vue'
import App from './App.vue'

import VueContextMenu from './lib/index.js'

Vue.use(VueContextMenu)

console.log(VueContextMenu)

new Vue({
  el: '#app',
  render: h => h(App)
})
