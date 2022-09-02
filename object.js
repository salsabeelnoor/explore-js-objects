// create object using object literals
/* 
    object has two part 
    ==> method
    ==> properties
*/
const player = {};
player.name = 'Small Nirob';
player.speciliaty = 'batsman';
player.bat = function (){
    console.log('swing your bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'Pandey', 
    job: 'Khay Andey', 
    ball: function(){
        console.log('throw the ball');
    },
    salary: 10000
}
//2. object constructor
const person = new Object();
// console.log(person);

// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
// console.log(atel.name);

//4. class
class Person{
    name = 'abul';
    address = 'spdpr ghat';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1);

//5. Function ==> used before ES6
function Car (model, price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 50);

