function imgLoad(url) {
	return new Promise(function(resove,reject) {
		var request = new XMLHttpRequest();
		request.open('GET',url);
		request.responseType = 'blob';
		request.onload = function() {
			if(request.status === 200) {
				resove(request.response);
			}else{
				reject(Error('Image'))
			}
		};
		request.onerror = function(){
			reject(Error('There was a network error'))
		};
		request.send();
	})
}

function howMany(selectObject) {
	var numberSelected = 0;
	for(var i=0;i<numberSelected.options.length;++i) {
		if(selectObject.options[i].selected) {
			numberSelected++;
		}
	}
	return numberSelected;
}

let arr = [3,5,7];
arr.foo = 'hello';

for(let i in arr) {
	console.log(i); // 0 1 2 foo
}
for(let i of arr) {
	console.log(i) //3,5,7,
}

function map(f,a) {
	var result = [];
	var i;
	for(i=0;i!=a.length;++i) {
		result[i] = f(a[i]);
	}
	return result;
}

function outside(x) {
	function inside(y) {
		return x+y;
	}
	return inside;
}

var pet = function(name) {//外部定义了一个变量name
	var getName = function() {
		//内部函数可以访问 外部函数定义的name
		return name;
	};
	//返回这个内部函数 从而将其暴露在外部的函数作用域
	return getName;
}

var createPet = function(name) {
	var sex;
	return {
		setName:function(newName) {
			name = newName;
		}
	},
	getName:function() {
		return name;
	},
	getSex:function() {
		return sex;
	},
	setSex:function(newSex) {
		if(typeof newSex == 'string')&&(newSex.toLowerCase() == 'male' || newSex.toLowerCase() == 'female'){
			sex = newSex;
		}
	}
}
var pet = createPet()

['dog','cat','hen'].forEach(function(currentValue,index,array) {
	
})
