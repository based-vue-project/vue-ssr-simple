// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './component/List.vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import store from './store/store_index'

Vue.use(vueAxios, axios)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
