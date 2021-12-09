let rectangle = { 
    width:5, 
    height: 10, 
    area:function()
    {return this.width*this.height}  
}
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area());

console.log("---------------------------------------------------------");

let rectangle2 = { 
    width:5 ,
    height: 15 ,
    area:function()
    {return this.width * this.height}
}
console.log(rectangle2.width);
console.log(rectangle2.height);
console.log(rectangle2.area());


/* เขียนใน terminal
let triangle = {height:10, base:20,area:function(){return 1/2*this.height*this.base}}

triangle.height = 5;

triangle["base"]= 4;

triangle.area()

triangle.id = 5;

for(let key in triangle){
 console.log(key)
 console.log(triangle[key])}

triangle.side1=10;

triangle.side2=20;

triangle.side3=15;

triangle.perimeter=function(){return this.side1+this.side2+this.side3}
*/
