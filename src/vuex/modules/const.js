export default {
	namespaced: true, //带命名空间
    state: {
        dataItem: []
    },
	mutations: {
		dataItem_fn(state, params) { //是一个函数
			state.stateData = params
		},

	},



}
