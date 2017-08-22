export default {
	//在created()生命周期总出发了get  使用this.$http发起请求
	created(){
		let api = 'http://apis.baidu.com/apistore/iplookup/iplookup_paid?ip=117.89.35.58';
		this.$http.get(api).then(response => {
			console.log('接口调用成功');
			console.log(response);
		},response => {
			console.log('接口调用错误');
		})
	}
}

//不借助this
let api = 'http://apis.baidu.com/apistore/iplookup/iplookup_paid?ip=117.89.35.58';
Vue.http.get(api).then(response => {
	console.log('接口调用成功');
	console.log(response);
},response => {
	console.log('接口调用失败');
})


//post  请求
let api = 'http://apis.baidu.com/apistore/iplookup/iplookup_paid?ip=117.89.35.58';
this.$http.post(api,{
	username:'xxx'
}).then(response => {
	console.log("接口调用成功");
	console.log(response);
},response => {
	console.log("接口调用错误");
})

//get请求

axios.get('./user?ID=12345').then(function(res) {
	console.log(res);
}).catch(function(err) {
	console.log(err);
})

axios.get('/user',{
	params:{
		ID:12345
	}
}).then(function(res) {
	console.log(res);
}).catch(function(err) {
	console.log(err);
})

//post请求
axios.post('/user',{
	firstName:'Fred',
	laseName:'Flintstone'
}).then(function(res) {
	console.log(res);
}).catch(function(err) {
	console.log(err);
})

//一次并发多个请求
function getUserAccount(){
	return axios.get('/user/12345');
}
function getUserPermissions(){
	return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(),getUserPermissions()])
.then(axios.spread(function(acct,perms) {
	//当着两个请求都完成的时候回触发这个函数  两个参数分别代表返回的结果
}))


//axios post请求配置
axios({
	method:'post',
	url:'/user/12345',
	data:{
		firstName:'Fred',
		lastName:'Flintstone'
	}
})

//创建一个axios实例  可以自定义配置
var instance = axios.create({
	baseURL:"http://some-domain.com/api",
	timeout:1000,
	headers:{'X-Custom-Header':'foobar'}
})

{
	url:'/user',//url是请求的服务器地址
	method:'get',//method是请求资源方式
	baseURL:'http://some-domain.com/api/',
	//如果url不是绝对地址  那么baseURL将会加到url的前面
	//当url是相对地址的时候  设置baseURL会非常的方便
	transformRequest:[function(data) {
		return data //在这里根据自己的需求改变数据
	}],
	//transformRequest选项允许我们在请求发送到服务器之前的数据做出一些改动
	//该选项只使用于以下请求方式：'put/post/path'
	//数组里面的最后一个函数必须返回一个字符串 一个ArratBuffer 或者Stream
	transformResponse:[function(data) {
		return data;
	}],
	//transformResponse选项允许我们在数据发送到'then/catch'方法之前对数据进行改动
	headers:{'X-Resuqested-With':'AMLHttpRequest'},
	//headers选项是需要被发送的自定义请求头消息
	params: {
		ID:12345
	},
	//他的类型必须是一个纯对象或者是URLSearchParams对象
	paramsSerializer:function(params) {
		return Qs.stringify(params,{arrayFormat:'bractkets'})
	},
	//paramsSerializer是一个可选函数  起作用是让参数params序列化
	data{
		firstName:'Fred'
	},
	//data选项是作为一个请求体而需要被发送的数据
	//该选项只适用于方法：'put/post/patch'
	//当没有设置stransformRequest选项时 data必须是以下几种类型之一
    //string/plain/object/ArrayBuffer/ArrayBufferView/URLSearchParams
  	//仅仅浏览器：FormData/File/Bold
  	//仅node:Stream
  	timeout:1000, 
  	//timeout选项定义了请求发出的延迟毫秒数
  	//如果请求花费的时间超过延迟的时间  那么请求会被终止
  	withCredentials:false //withCredentails选项表明了是否跨域请求
  	adapter:function(config) {
//		'adapter'适配器选项允许自定义处理请求 这会使得测试变得方便
//      返回一个promise 并提供验证返回
  	},
  	auth: {
  		username:'zhangsan',
  		password:'s00sdkf'
  	},//auth表明http基础的认证应该被使用 并提供证书
  	//这会设置一个authorization头（header）并覆盖你在header设置的Authorization头信息
  	responseType:'json',
  	//返回数据的格式  其可选项是arraybuffer,blob,document,json,tetx,stream
  	xsrfCookieName:
}

axios.get('/user/12345').then(function(res) {
	console.log(res.data);
	console.log(res.status);
	console.log(res.statusText);
	console.log(res.headers);
	console.log(res.config);
})


//拦截器
//添加一个请求拦截器
axios.interceptors.request.use(function(config) {
	//在请求发出之前进行一些操作
	return config;
},function(err) {
	return Promise.reject(error);
});

//添加一个响应拦截器
axios.interceptors.response.use(function(res) {
	//在这里对返回的数据进行处理
	return res;
},function(err) {
	return Promise.reject(error);
})

//错误处理
axios.get('/user/12345').catch(function(err) {
	if(err.response) {
		console.log(err.response.data);
		console.log(err.response.status);
		console.log(err.response.header);
	}else{
		//一些错误时在设置请求的时候触发
		console.log(err.message);
	}
	console.log(error.config);
})
