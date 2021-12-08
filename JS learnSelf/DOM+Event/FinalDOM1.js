let product =[
    {
        productID: 'M01',
        productName: 'Malibu night',
        productDesc:'Bottle of sea',
        price: 2400
    }
    ,
    {
        productID: 'M02',
        productName: 'Malibu za',
        productDesc:'Bottle of wine',
        price: 3222
    }

];
const divProductsElement = document.querySelector('#products')

const divProductsElementCreate = document.createElement('div');
divProductsElementCreate.setAttribute('id',product[0].productID);

const pProductIdElement = document.createElement('p');
pProductIdElement.setAttribute('style','color:green');
pProductIdElement.textContent= 'Product Id:'+ product[0].productID;
// pProductIdElement.setAttribute('id',product.productID)
divProductsElementCreate.appendChild(pProductIdElement);

const pProductNameElement = document.createElement('p');
pProductNameElement.textContent = 'Product Name:'+ product[0].productName;
divProductsElementCreate.appendChild(pProductNameElement);

const pProductPriceElement = document.createElement('p');  
pProductPriceElement.textContent = 'Price:' + product[0].price;

divProductsElementCreate.appendChild(pProductPriceElement);
divProductsElement.appendChild(divProductsElementCreate);


const Pumza = document.getElementById('Pum')
Pumza.addEventListener('click',Call);

let filterProduct = document.querySelectorAll("#products")


function Call(){ 
    
    let filterProduct = document.querySelectorAll("#products")

    for(let i = 0;i<filterProduct.length;i++){
        
        let x = document.createElement('div')
        x.textContent = divProductsElementCreate.getAttribute('id')
        document.getElementsByTagName('body')[0].appendChild(x)     
    }   
}
}
