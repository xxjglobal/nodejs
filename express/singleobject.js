//singleobject.js
function hello(){
	var name;
	this.setName=function(sname){
		name=sname;
		};
	this.sayHello=function(){
		console.log('Hello '+name);
		};
	};
exports.hello=hello;
