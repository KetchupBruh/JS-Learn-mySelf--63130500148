let product = {
    productId: 'p001',
    productName: 'Dell Notebook',
    productDesc: 'monitor 15 inches, latitubr 5500',
    price: 35000
}
//1. query div of products as reference node
const divProductsEle = document.querySelector('#products'); //เลือก .class หรือ #id หรือ tag ที่ต้องการได้
console.log(divProductsEle);

//2. create div of product element
// <div id="P001"></div>
const divProductEle = document.createElement('div'); //สร้าง div
divProductEle.setAttribute('id', product.productId); 

//3. create p of product id element
// <p>Product Id: P001 </p>
const pProductIdEle = document.createElement('p'); 
pProductIdEle.setAttribute('style','color:blue')
pProductIdEle.textContent = 'Product Id: ' + product.productId;


//4. add <p> product id to div of product
// <div id="P001">  <p>Product Id: P001</p></div> 
divProductsEle.appendChild(divProductEle); 
divProductEle.appendChild(pProductIdEle);
console.log(divProductEle);

//5. create p of product Name element 
// <p> Product Name : Dell Notebook </p>
const pProductNameEle = document.createElement('p'); 
pProductNameEle.textContent = 'Product Name: ' + product.productName;

//6. add <p> product name to div of product
divProductEle.appendChild(pProductNameEle);

//7. create p of product Price element 
// <p> Product Price : 35000 </p>
const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent = 'Product Price : ' + product.price;

//8. add <p> product price to div of product
divProductEle.appendChild(pProductPriceEle);