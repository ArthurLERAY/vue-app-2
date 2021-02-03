import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import { VueHammer } from 'vue2-hammer';

Vue.config.productionTip = false

Vue.use(VueHammer);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
