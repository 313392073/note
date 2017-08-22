import Vue from 'vue';
import Router from 'vue-router';
import ContentA from '../components/ContentA';
import ContentB from '../components/ContentB';

Vue.use(Router);
export default new Router({
	routes: [
	{
		path:'/a',
		name:'ContentA',
		component:ContentA
	},
	{
		path:'/b',
		name:'ContentB',
		component:ContentB
	}
	
	]
});
