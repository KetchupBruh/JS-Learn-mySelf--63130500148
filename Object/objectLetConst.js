const max_student = 50;
//max_student = 125;
let maxStudent = 100;

let player2 = {id:2 , name:'tae'};
const player1 = {id:1 , name:'bruh'};

player2 = player1; //ได้เหมือนกัน เพราะ player1 assign to player2

//setter-mutator methods/mutated (modified property) syntax
//player1.id = 5; or
//player1["id"]=5;

//getter-accessor method/read property
//player.id or
//player["id"]

//ไม่สามารถเป็น value ของ object ตรงๆ แต่เปลี่ยน value ใน object ได้ 
player1.id = 3;

console.log(player2);
console.log(player1);