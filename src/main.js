import Vue from 'vue'
import App from './App.vue'
import demoBlock from './components/demo-block';
import 'highlight.js/scss/color-brewer.scss'
import router from './router'
console.log(router)

Vue.component('demo-block', demoBlock);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
