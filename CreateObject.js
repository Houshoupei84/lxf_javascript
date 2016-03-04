function Student(name){
        this.name = name;
        this.hello = function(){
            console.log('Hello '+this.name);
        }
}

var xiaoming = new Student("xiaoming");
xiaoming.hello();

//var xiaoming = new Student("xiaoming");
//var xiaoming = new Student("xiaoming");
var isEqual = (xiaoming.constructor === Student.prototype.constructor);
console.log(isEqual);