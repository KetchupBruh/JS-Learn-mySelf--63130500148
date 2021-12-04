let person1 = new Object;
person1.id = 1;
person1.name = "name1";

let person2 = {id : 1, name : "name2"};

let person3 ={
    id:3, name : {firstname : "name3", lastname : "lastname3"}
}

let person4 = [
    {id : 4, name : "name4"} ,
    {id : 5, name : "name5"}
]

let family = {
    member : ["dad", "mom", "son"] ,
    name : ["Ta", "Ras", "Was"]
}

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person4[0]);
console.log(family);