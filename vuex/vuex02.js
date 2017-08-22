import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import MyComponent from './MyComponent';

Vue.store(Vuex);

var app = new Vue({
	el:"#app",
	store,
	components:{
		MyComponent
	}
})
