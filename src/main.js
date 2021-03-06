import Vue from 'vue'
import App from './App.vue'
import demoBlock from './components/demo-block';
import 'reset-css'
import 'highlight.js/styles/color-brewer.css'
import router from './router'

Vue.component('demo-block', demoBlock);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
