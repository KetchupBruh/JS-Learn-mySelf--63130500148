// import { products as prodData } from "./productlist.js";
// function createEl(elName, attributes) {
//     let el = document.createElement(elName);
//     for (const attr in attributes) {
//         if (attr == 'inner') {
//         el.innerHTML = attributes[attr]
//     } else {
//         el.setAttribute(attr, attributes[attr])
//         }
//     }
//         return el;
// }
// function appendManyChilds(parent, ...childs) {
//     childs.forEach(e => parent.appendChild(e));
// }
    
// function render() {
//     let productDiv = document.querySelector("#product");
//     prodData.forEach(e => {
//         let col = document.createElement("div");
//         col.className = "col-xs-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch mt-2 justify-content-center"
//         col.id = e.id;

//         let card = document.createElement("div");
//         card.className =  "card shadow-sm text-center";
//         card.style = "width: 18rem;";

//         let img = document.createElement("img");
//         img.src = `./images/${e.pictureName}`;
//         img.style = "height: 200px; ";

//         let cardbody = document.createElement("div");
//         cardbody.className = "card-body";

//         let sushiName = document.createElement("p");
//         sushiName.className = "card-title";
//         sushiName.innerText = e.name;

//         let describe = document.createElement("p");
//         describe.className = "card-title";
//         describe.innerText = e.describe;

//         let price = document.createElement("p");
//         price.className = "card-title";
//         price.innerText = e.price;

//         let remain = document.createElement("p");
//         remain.className = "card-title";
//         remain.innerText = `คงเหลือ : ${e.remainInStock} จำนวน`;

//         let btnAddToCart =
//         product.remainInStock > 0
//           ? createEl('div', {
//               class: 'btn btn-dark rounded-0 text-center',
//               inner: 'เพิ่มลงตะกร้าสินค้า',
//               id: product.id,
//             })
//           : createEl('div', {
//               class: 'btn btn-dark rounded-0 text-center disabled',
//               inner: 'สินค้าหมด',
//               id: product.id,
//             });
//         btnAddToCart.addEventListener('click', (e) => {
//             let product_id = e.target.id;
//             Cart.add(product_id);
//         });
//         divAddToCart.appendChild(btnAddToCart);

//       let cardBodyChilds = [sushiName, describe, price, remain, divAddToCart];
//       appendManyChilds(cardBody, ...cardBodyChilds);

//       let cardChilds = [img, cardBody];
//       appendManyChilds(card, ...cardChilds);

//       col.appendChild(card);
//       productDiv.appendChild(col);

//     });
// }
// render();

import { products as prodData } from "./productlist.js";

function createEl(elName, attributes) {
    let el = document.createElement(elName);
    for (const attr in attributes) {
        if (attr == 'inner') {
        el.innerHTML = attributes[attr]
    } else {
        el.setAttribute(attr, attributes[attr])
        }
    }
    return el;
}
    function appendManyChilds(parent, ...childs) {
        childs.forEach(e => parent.appendChild(e));
    }
    function renderProduct() {
        let productDiv = document.getElementById("products");
        prodData.forEach(e => {
        let col = createEl("div", {
        class: "col-xs-12 col-md-6 col-lg-4 col-xl-3 d-flexalign-items-stretch mt-2 justify-content-center",
        id: e.id
    });
        let card = createEl("div", {
        class: "card shadow-sm text-center",
        style: "width: 18rem;"
    });
        let img = createEl("img", {
        src: `./images/${e.pictureName}`,
        height: '200px'
    });
        let cardBody = createEl("div", {
        class: "card-body"
    });
        let sushiName = createEl("h5", {
        class: "card-title",
        inner: e.name
    });
        let describe = createEl("p", {
        class: "card-title",
        inner: e.describe
    });
        let price = createEl("p", {
        class: "card-title",
        inner: `ราคา : ${e.price} บาท`
    });
        let remain = createEl("p", {
        class: "card-title",
        inner: `คงเหลือ : ${e.remainInStock} จำนวน`
    });
        let divAddToCart = createEl("div", {
        class: "d-flex justify-content-center"
    });
        let btnAddToCart = (e.remainInStock > 0) ?
        createEl("div", {
        class: "btn btn-dark rounded-0 text-center",
        inner: "เพิ่มลงตะกร้าสินค้า",
        onclick: `addToCart(${e.id});`
    })
        :
        createEl("div", {
        class: "btn btn-dark rounded-0 text-center disabled",
        inner: "สินค้าหมด"
    })
        divAddToCart.appendChild(btnAddToCart);
        let cardBodyChilds = [sushiName, describe, price, remain,
        divAddToCart];
        appendManyChilds(cardBody, ...cardBodyChilds);
        let cardChilds = [img, cardBody];
        appendManyChilds(card, ...cardChilds);
        col.appendChild(card);
        productDiv.appendChild(col);
    });
}
renderProduct()