// [] = array , {} = object

//#0 variable with single value
let product1 = 'Coke';
let product2 = 'Pepsi';
let price1 = 15;
let price2 = 13;

//#1 array set with mutiple values
let product1 = ['coke','pepsi'];
let price1 = [15,12];

//#2 array of object [ {} ]
let products = [
    {product: 'coke' ,price: 15},
    {product: 'pepsi' ,price: 12}
];
console.log(products);

//#3 oblect with array value
//{propertyKey1 : propertyValue1,propertyKey2 : propertyValue2}
let product2 = {
    products:['coke','pepsi'],
    prices:[15,13]
};
console.log(product2);

let thailand = {lang: "thai" ,
    state : ["bangkok","phuket","chaingmai"],
    food : ["Tom yam","rice"]
    }
console.log(thailand);