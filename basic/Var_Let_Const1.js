//var ประกาศทับได้
var num = 1;
var num = 2;
console.log("var : " + num);

//let ประกาศทับไม่ได้ แต่ update ได้
let num1 = 1;
num1 = 2;
console.log("let : " + num1);

//ตัวแปรที่กำหนดด้วยconstไม่สามารถประกาศซ้ำได้
//ตัวแปรที่กำหนดด้วยconstไม่สามารถกำหนดใหม่ได้
const num2 = 1;
num2 = 2;
console.log("const : " + num2);