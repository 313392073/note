import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const First = {
	template:`<div>first的内容{{$route.params.id}}</div>`
};
const Second = {
	template:`<div>Second的内容</div>`
};
const Home = {
	template:`<div>主内容</div>`
};



//子路由
const firstFirst = {
	template:`<div>111主内容</div>`
};

const secondSecond = {
	template:`<div>222主内容</div>`
};

//子视图的模板 
const aa = {
	template:`
	<div class="aa">
		<h2>组件</h2>
		<router-view class="bb"></router-view>
	</div>`
}

const router = new VueRouter({
	mode:'history',
	base:__dirname,  //当前文件下
	routes:[
		{path:'/',name:'Home',component:Home},
		{path:'/first',name:'Homefirst',component:aa,
			children:[
				{path:'/',name:'Home-first',component:first},
				{path:'/firsrFirst',name:'First-home',component:firstFirst},
				{path:'/secondSecond',name:'Second-home',component:secondSecond},
			]
		},
		{path:'/second',name:'Homesecond',component:Second},
	]
});

new Vue({
	router,
	template:`
	<div id="r">
		<h1>导航</h1>
		<p>{{$route.name}}</p>
		<ul>
			<li><router-link to='/'>/</router-link></li>
			<li><router-link to='/first'>first</router-link></li>
				<ol>
					<li><router-link to='{name:First,params:{id:12}}'>first</router-link></li>
					<li><router-link to='/second/second'>second</router-link></li>
				</ol>
			<li><router-link to='/second'>second</router-link></li>
		</ul>
		<router-view class="res"></router-view>
		<router-view class="res" name="left"></router-view>
		<router-view class="res" name="right"></router-view>
	</div>`
}).$mount("#app");
