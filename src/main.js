import Vue from 'vue'
import App from './App.vue'
import store from './vuex/modules/citypanel'

new Vue({
  el: 'body',
  store,
  components: { App }
})
