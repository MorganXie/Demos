var People = (function (){
	var instance ;
	function init(name){
		return {
			name:name
		};
	};
	
	return {
		createPeople:function(name){
			if(!instance){
				instance = init(name);
			}
			
			return instance;
		}
	};
})();


var p1 = People.createPeople('xiexuan');
var p2 = People.createPeople('xx');

console.log(p1); //'xiexuan'
console.log(p2); //'xiexuan'