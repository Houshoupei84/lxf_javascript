var Student ={
    name: 'Robot',
    height : 1.2,
    run : function(){
        console.log(this.name + 'is running ****');
    }
};

// var xiaoMing = {
//     name : "xiaoMing"
// };
//xiaoMing.__proto__ = Student;

// console.log(xiaoMing.name);
// xiaoMing.run();

var Bird = {
    fly: function(){
        console.log(this.name +"is flying ");
    }
};

// xiaoMing.__proto__ = Bird;
// xiaoMing.fly();

function CreateObject(name) {
    var obj = Object.create(Student);
    obj.name = name;
    return obj;
}

var xiaoming = CreateObject('xiaoming');

xiaoming.run();
// xiaoming.__proto__ = Bird;
// xiaoming.fly();
var isEqual = (xiaoming.__proto__ === Student);
console.log(isEqual);
