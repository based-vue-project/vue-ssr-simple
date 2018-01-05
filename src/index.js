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

/*
 * 服务端把要给客户端的 state 放在了 window.__INITIAL_STATE__ 这个全局变量上面。
 * 前后端的 HTML 结构应该是一致的。
 * 然后要把 store 的状态树写入一个全局变量（__INITIAL_STATE__），
 * 这样客户端初始化 render 的时候能够校验服务器生成的 HTML 结构，
 * 并且同步到初始化状态，然后整个页面被客户端接管。
 */
// store替换使client rendering和server rendering匹配
if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
