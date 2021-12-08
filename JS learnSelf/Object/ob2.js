//#1 
let num1 = 10;
let num2 = 20;
num2 = num1;    //num1 assigns value(10) to num2
num2 = 30;      //*insert this line
console.log(num1); //num1=10
console.log(num2); //num2=55
console.log(num1 === num2); //num1===num2 false primitive values are compared

//#2 Object address
let std1 = { id: 1, name: 'Susan' };
let std2 = { id: 2, name: 'John' };
std2 = std1;                         //std1 assigns value (memory address) points to the same memory address
std2.name = 'Peter';
console.log(std1);                   //std1={ id: 1, name: 'Peter' }
console.log(std2);                   //std2={ id: 1, name: 'Peter' }
console.log(std1 === std2);          //std1===std2 true memory address are compared

//#3 Function
function doSomething(student){       //student is a formal parameter //student=std3
    student.id = 63130500148
}
let std3 = {id:3 ,name:"Joe"};
console.log(typeof std3);
console.log(std3);

doSomething(std3);                   //std3 is an actual parameter
console.log(std3);

//#4
function doSomething2(num) {
    num = 555;
}
let num3 = 1;
console.log(typeof num3);
doSomething2(num3);
console.log(num3);  //1
