/**
 * axios 的配置
 * 
 * url: 用来向服务器发送请求的url 
 * method： 请求方法  默认是get
 * baseURL：基础URL路径  假如url 不是绝对路径 如https://some-domain.com/api/v1/login?name=jack,那么向服务器发送请求的URL将会是baseURL + url。
 * transformRequest ： transformRequest方法允许在请求发送到服务器之前修改请求  此方法只适合put post patch 方法中
 * 而且 从方法最后必须返回一个string ArrayBuffer 或者Stream
 * 
 * transformResponse ： transformResponse 方法允许在数据传递到then/catch 之前修改response数据 此方法最后也要返回数据
 * 
 * headers ： 发送自定义Headers 头文件  头文件中包含了http请求的各种信息
 * params ：params 是发送请求的查询参数对象  对象中的数据会被拼接成url?param1=value1&params2 =value2
 * data: data 是在发送POST PUT 或者PATCH请求的数据对象
 * timeout： 请求超时设置  单位为毫秒  
 * withCredentials ： 表明是否有跨域请求需要用到的证书
 * adapter ： adapter 允许用户处理处理便于测试的请求  返回一个Promise 和一个有效的resonse 
 * auth： auth 表明提供凭证用于完成http 的身份验证  这将会在headers中设置一个Authorization
 *        授权信息  自定义Authorization授权要设置在headers中
 * responseType ： responseType表示服务器放响应的数据类型  有arraybuffer、blob、document、json、text、stream这6个类型，默认是json类似数据。
 * xsrfCookieName —— 用作 xsrf token 值的 cookie 名称
 * xsrfHeaderName —— 带有 xsrf token 值 http head 名称
 * onUploadProgress —— 允许在上传过程中的做一些操作
 * onDownloadProgress —— 允许在下载过程中的做一些操作
 * maxContentLength  定义了接收到的response响应数据的最大长度
 * validateStatus ：validateStatus 定义了根据http 响应状态码决定是否接受或拒绝获取到的promise
 *                  如果validateStatus 返回true  （或设置为null 或undefined） promise 将被接受  否则： promise 将被拒绝
 * maxRedirects： maxRedirects定义了在node.js中的redirect的最大值  如果设置为0  则没有redirect
 * httpAgent :  定义在使用http 请求时的代理
 * httpsAgent: 定义在使用https 请求时的代理
 * proxy : proxy 定义在代理服务器的主机名和端口  auth
 * cancelToken : cancelToken 定义一个cancel Token 用于取消请求
 * 
 */

//  统一config配置

// 在接口测试中，我们经常需要切换线上环境和测试环境，这里我们都可以通过Config来配置，这样我们所有的发起的请求都是通过这个基本的URL走了。

/**
 * axio.defaults.timeout = 5000;
 * axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 * axios.defaults.baseURL = 'http://www.xxxx.xxx/api';
 */


//  interface 拦截器 我们发起大量的请求时候，需要对请求做统一的处理那就用到它了。

// request 统一处理操作
/**
 * 如果是post 配置中可不能用paams字段了  需要使用data字段
 * 注意： post 的参数需要序列化  不然服务器不会正确的接收 会报错  所以需要对request 的数据进行一次序列化  qs插件
 */


// 请求方法别名
/**
 * axios支持的所有请求方法别名  注意： [...]中的数据表示可以为空  url 是ajax 请求地址  data 是提交数据对象 config 是配置对象  所有的配置都可以在confi中实现
 * axios.request(config)
 * axios.get(url[,config])
 * axios.delete(url[,config])
 * axios.head(url[,config])
 * axios.post(url[,data[,config]])
 * axios.put(url[,data[,config]])
 * axios.patch(url[,data[,config]])
 */

 //并发性
 /**
  * 以下接口用于处理并发请求（同时处理多个request）
  * axios.all(iterable)
  * axios.spread(callback)
  */


  import axios from 'axios';
  import qs from 'qs';

function checkStatus(response){
    if(response && (response.status === 200 || response.status === 304 || response.status === 400)){
        return response
    }
}








//eg1 start //
const key = 'user';
const store = new Vuex.Store({
    state(){
        return {
            user:null
        }
    },
    getters:{
        getStorage(state){
            if(!state.user){
                state.user = JSON.parse(localStorage.getItem('key'))
            }
            return state.user;
        }
    },
    mutations:{
        $_setStorage(state,value){
            state.user = value
            localStorage.setItem(key,JSON.stringify(value))
        },
        $_removeStorage(state){
            state.user = null
            localStorage.removeItem(key)
        }
    },
})

//eg1 end //


//vue 中实现用户登录级token 验证start

/**
 * 在前后端完全分离的情况下  vue项目中实验token 验证的大致思路如下
 * 1  第一次登录的时候  前端调用后端的登录接口  发送用户名和密码
 * 2  后端接收到请求  验证用户名和密码  验证成功  就给前端返回一个token
 * 3  前端拿到token 将token 存储到localStorage 和 vuex中  并跳转路由页面
 * 4  前端每次跳转路由  就判断localStorage 中有无token 没有就跳转到登录页面 有则跳转到对应路由的页面
 * 5  每次调用后端接口 都要在请求头加token 
 * 6  后端判断请求头中有无token 有token  就拿到token 并验证token 验证成功就返回数据 验证失败就token 过期
 *    就返回401 请求头中没有token 也返回401
 * 
 * 7 如果前端拿到的状态码是401  就清除token信息并跳转到登录页面
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        //存储token
        Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization'):''
    },
    mutations:{
        changeLogin(state,user){
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization',user.Authorization)
        }
    }
})
export default{
    store:store
}

//router index.js  使用router.beforeEach() 判断用户是否需要登录
router.beforeEach((to,from,next) => {
    if(to.name == 'login'){
        next();
    }else{
        let token = localStorage.getItem('Authorization');
        if(!token){
            next({path:'/login'});
            return;
        }else{
            next()
        }
    }
})

//请求头加token 添加请求拦截器  在请求头中加token
axios.interceptors.request.use(
    config => {
        if(localStorage.getItem('Authorization')){
            config.headers.Authorization = localStorage.getItem('Authorization');
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//前端拿到状态码是401 就清除token 信息  并跳转到登录页面
localStorage.removeItem('Authorization');
this.$router.push('/login')
//vue 中实现用户登录级token 验证end


//  拦截器 (要想统一处理所有http请求和响应，就得用上 axios 的拦截器。)  start

// 每次跳页面, 都要获取新路由对应的html页面, 这时候可以用axios的http拦截
// 每次路由跳转, 都先让后台验证一下token是否有效, 在http头添加token, 
// 当后端接口返回 401 Unauthorized（未授权） ，让用户重新登录。

// 关于Autorization     使用之后会忽略cookie的token,  削弱了安全性, 可以配合https

// http request拦截器
axios.interceptors.request.use(
    config => {
        if(store.state.token) {// 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err)
    }
)

//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error.response){
            switch(err.response.status) {
                case 401:
                    store.commit(type.LOGOUT);
                    router.replace({
                        path:'/login',
                        qurey:{redirect:router.currentRoute.fullPath}
                    })
            }
        }
    }
    return Promise.reject(error.response.data)
)

//  拦截器 (要想统一处理所有http请求和响应，就得用上 axios 的拦截器。)  end

// axios拦截器start

    axios.interceptors.request.use(
        config => {
            config.baseUrl = '/api/';
            config.withCredentials = true; //允许携带token 解决跨域产生的相关问题
            config.timeout = 6000;
            let token = sessionStorage.getItem('access_token');
            let csrf = store.getters.csrf

            if(token){
                config.headers = {
                    'access-token':token,
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            }
            if(config.url === 'refresh') {
                config.headers = {
                    'refresh-token': sessionStorage.getItem('refresh_token'),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            return config;
        },
        error => {
            return Promise.reject(error)
        }
    )

    axios.interceptors.response.use(
        //定时刷新access-token
        response => {
            if(!response.data.value && response.data.data.message === 'token invalid'){
                //刷洗token
                store.dispatch('refresh').then(response => {
                    sessionStorage.setItem('access-token',response.data)
                }).catch(error => {
                    throw new Error('token刷新'+error)
                })
            }
            return response
        },
        error => {
            return Promise.reject(error)
        }
    )


// axios拦截器end





/**
 * state  存放的是我们上面 所提到的状态
 */

/**
 * vuex 是一个专门为vue.js 应用程序开发的状态管理模式 采用集中式储存管理应用的所有组件的状态 并以相应的规则保证状态以一种可预测的方式发生变化
 * vuex  是用来管理组件之间通信的一个插件
 * 
 * 组件之间是独立的  组件之间实通信  我们知道只有
 * 
 * props 选项 但这仅限于父组件和子组件之间的通信  
 * vuex 兄弟组件之间的通讯
 * 
 * store 是vuex的一个核心方法  字面理解是仓库的意思  
 * vuex store 是响应式的 当vue 组件从store 中读取状态（state选项）
 * 如果store中的状态发生更新时  他会及时响应给其他的组件（类似双向数据绑定）
 * 而且不能直接改变store的状态  改变的唯一方法就是  显示的提交更改（mutations现象）
 * 
 * 
 * store 的获取  一般会在组件的计算属性computed获取state的数据（计算属性会监控数据变化  一旦发生改变就会响应）
 */

 import * as types from './types'; 
 //state  存储最初始的状态
 const state = {
      leftNavState:false,
      testMsg:''
  }

    //   action 可以包含任意异步操作  ajax  setTimeout setInterval等等
  //组件通过事件（可以是异步的操作）来dispatch 触发对应的action  action 通过commit(mutations,data) 来提交data到对应的mutations
  const actions = {
    //左侧导航栏的开关  
    changeLeftNavState({commit},status){
        commit(types.CHANGE_LEFTNAV_STATUS,status)
    },
    changeTestMsg({commit},msg){
        commit(types.CHANGE_TEST_MSG,msg)
    },
    changeChildText({commit},msg){
        commit(type.CHANGE_CHILD_TEXT,msg)
    }
  }

  /**
   * context dispatch  理解
   * context  是与store 实例具有相同方法和属性的对象 可以通过context.state 和context.getters 来获取state 和 getters
   * dispatch:  派发 派遣  触发事件  dispatch 就会通知actions 
   */



  const getters = {
      leftNavState:state => state.leftNavState
  }

  //这个函数的执行是相应的action 来触发对应的mutations 达到的效果是改变state 
  const mutations = {
      [types.CHANGE_LEFTNAV_STATUS](state,status){
          state.leftNavState = status
      },
      [type.CHANGE_TEST_MSG](state,msg){
          state.testMsg = msg
      },
      [type. CHANGE_CHILD_TEXT](state,msg){
          state.testMsg = msg
      }
  }
  export default {
      state,
      actions,
      getters,
      mutations
  }
  
  /**
   * 总结：
   * mutation 只管存store
   * dispatch 承载用的操作  从而触发action 
   * action 接受数据(处理)并提交mutation
   * getter  
   */

   /**
    *   state 存放项目中各种多组件共享的状态
        mutations 存放更改state里状态的方法
        getters 从state里派生出来的状态，，比如将state中的某种状态进行过滤然后获取到的新的状态
        actions 通过commit mutations中的方法来改变状态，可以进行异步操作
        modules将状态按模块划分，将Store对象分割成多个子模块，使代码结构更加清晰
    */