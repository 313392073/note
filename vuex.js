//导入vuex
import Vuex from 'vuex';
//申明使用vuex
Vue.use(Vuex);

//实例化一个Vuex.Store对象

let store = new Vuex.Store({
	state:  {
		navbar:　{
			title: 'navbar-title'
		}
	},
	//muntation中的方法只能接受两个参数  是对state中的数据同步修改
	//第一个store.state
	//第二个是附带的值  一般为修改的目标值(payload载荷)
	mutations: {
		setNavbarTitle(state,value) {
			state.navbar.title = value;
		}
	},
	
	
	//异步获取数据  先异步调用后台接口获得数据  在同步将数据更新到store.state中
	actions: {
		loadNavbarTitle(context,appendix) {
			//调用后台API的伪代码
			let title = _.get('http://api.xxx.com/navbar/title'),
			context.commit('setNavbarTitle',title);
		}
	}
})

new Vue({
	el:'#app',
	store,
	methods: {
		triger(){
			this.$store.commmit('setNavbarTitle','after modified');
		}
	},
	template: '<App/>',
	components:{App},
})

//注意这几加入store意味着我们可以在其他Vue实例中使用this.$store来得到vuex.Store对象
//自此  我们便可以通过修改store变量中的state,muntationshe actions来实现状态管理了



事件中心(子组件与子组件的通讯)

let eventHub = new Vue(); //创建事件中心

//组件1触发
<div @click="eve"></div>
methods: {
	eve(){
		eventHub.$emit("change",'hehe'); //eventHub触发事件
	}
}

//组件2接收
<div></div>
created()　{
	evebtHub.$on("change",()=> {
		this.msg = 'hehe';
	});
}


import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/longger';

import blog from './module.blog';

//在vue中 注册vuex
export default new Vuex.Store({
	state:{},
	plghins:process.env.NIDE_ENV !== 'production'?[createLogger]:[],
	modules:{
		blog
	}
});


class Store {
	constructor (option ={}) {
		installModule(this,state,[],options)
	}
}
