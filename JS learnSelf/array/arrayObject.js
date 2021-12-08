let students1 = [
    { id: 1, name: 'Ann' }, 
    { id: 2, name: 'Peter' }, 
    { id: 3, name: 'Mary' } 
]; 
students1[4] = {id: 4, name: 'Jane'};
console.log("student1 : " + students1[0]);
console.log(`student1 : ${students1[0]}`);
console.log(students1[0]);
students1[students1.length - 1].name = 'Kittayod';

console.log("student1 : " + students1[students1.length - 1]);
console.log(students1[students1.length - 1]);


