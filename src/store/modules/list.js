import { LIST } from '../mutation-types'

const state = {
	list: []
}

const getters = {
	list: state => state.list
}

const mutations = {
	[LIST.GET_DATA](state, data) {
		state.list = data
	},
	[LIST.ADD_DATA](state, data) {
        state.list = data
    }
}

export default {
	state,
	getters,
	mutations
}