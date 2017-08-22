action是一种专门用来被component调用的函数
action函数能够通过分发相应的mutation函数  来触发对store的更新
action也可以先从http后端或store中读取其他数据之后再分发更新事件

//事件分发对象  dispatch() state可以作为选项放入
//也可以利用es6的解构destructuing功能来简化对参数的导入
//action会受到store作为他的第一个参数

export const increment = function ({commit,state}) {
	commit('increment',1)
}
