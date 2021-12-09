//examples of arguments object
let products = [
    { prodId: 1, price: 10, amount: 2 },
    { prodId: 2, price: 5, amount: 10 }
];
function getProducts() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}  
getProducts(products);   