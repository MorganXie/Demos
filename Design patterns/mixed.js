var People = function (name,age){
	
	this.name  = name;
	this.age  = age;
	
}

People.prototype.sayName = function (){
	console.log(this.name);
}

function create (parentObj){
	function F(){};
	F.prototype = parentObj;
	return new F();
}


var Student = function (name,age,number){
	People.call(this,name,age);
 	 this.number = number ;
}

Student.prototype = create(People.prototype);

Student.prototype.sayNumber= function (){
	console.log(this.number);
}


var p1 = new Student('xiexuan',21,1451300234)
console.log(p1);
