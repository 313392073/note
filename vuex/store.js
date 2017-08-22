import Vuex from 'vuex';
const state = {
	count=0
}

const mutations = {
	//mutation的第一个参数是当前的state
	//你可以在函数里修改state
	increment (state,amount) {
		state.count += amount;
	}
}

//state的访问
//可以通过store.state来读取state对象
//还可以通过state.commit某mutation
store.commit('increment');
console.log(store.state.count);

//通过分发mutation的方式  而非直接改变store.state.count
//是因为我们想要更明确地追踪到状态的变化  这个简单的约定能够让你的意图更加明显
//在阅读代码的时候就更容易地解读应用内部的改变状态  此外 这样也有机会去实现一些能记录
//每次状态改变  保存状态快照的调试工具  

//state状态  mutation(变更)  action(动作) 



export default new Vuex.Store({
	state,
	mutations
})
