// server-entry.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

import App from './component/List.vue';
import store from './store/store_index'
import { LIST } from './store/mutation-types'

const app = new Vue({
	...App,
	store
});
// the default export should be a function
// which will receive the context of the render call
export default function (context) {
    return new Promise((resolve, reject) => {
    	Vue.axios.get('http://localhost:3000/data').then((res) => {
    		const list = res.data.data.liveWodList // 获取数据
    		store.commit(LIST.GET_DATA, list) // 数据存放在vuex
    		context.state = store.state // 将state存放在context中
    		resolve(app);
    	})
    });
};