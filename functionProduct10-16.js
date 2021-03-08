 const Product = require('./Product.js');
 //  -----------task 10 --------------

 function createListProduct() {
     this.listProduct = [];
     for (let i = 0; i < 10; i++) {
         this.listProduct[i] = new Product(i, 'Product' + (i + 1), i, new Date(2021, i, i + 10).getTime() / 1000, i * 2 + 1);
     }
     return this.listProduct;
 }

 listProduct = createListProduct();

 //  ------------task 11 -------------------
 // use for
 function filterProductByIdEs6(listProduct, id) {
     return listProduct.find(product => product.id === id).name
 }

 //use ES6
 function filterProductById(listProduct, id) {
     for (let i = 0; i < listProduct.length; i++) {
         if (listProduct[i].id == id) {
             return listProduct[i].name;
         }
     }
 }

 //  ------------task 12 -------------------
 // use for
 function filterProductByQuantity(listProduct) {
     let result = [];
     let j = 0;
     for (let i = 0; i < listProduct.length; i++) {
         if (!listProduct[i].isDelete && listProduct[i].quantity > 0) {
             result[j++] = listProduct[i];
         }
     }
     return result;
 }

 //use ES6
 function filterProductByQuantityEs6(listProduct) {
     return listProduct.filter(value => !value.isDelete && value.quantity > 0)
 }

 //  ------------task 13 -------------------
 // use for 
 function filterProductBySaleDate(listProduct) {
     let result = [];
     let j = 0;
     for (let i = 0; i < listProduct.length; i++) {
         if (!listProduct[i].isDelete && listProduct[i].saleDate > Date.now() / 1000) {
             result[j++] = listProduct[i];
         }
     }
     return result;
 }

 //use ES6
 function filterProductBySaleDateEs6(listProduct) {
     return listProduct.filter(product => !product.isDelete && product.saleDate > Date.now() / 1000)
 }

 //  ------------task 14 -------------------
 // use for 
 function totalProduct(listProduct) {
     let total = 0;
     for (let i = 0; i < listProduct.length; i++) {
         if (!listProduct[i].isDelete) {
             total += listProduct[i].quantity;
         }
     }
     return total;
 }

 //use ES6
 function totalProductEs6(listProduct) {
     let total = 0;
     return listProduct.reduce(function(accumulator, currentValue) {
         if (!currentValue.isDelete) {
             return accumulator + currentValue.quantity;
         }
         return accumulator;
     }, total)
 }

 //  ------------task 15 -------------------
 // use for 
 function isHaveProductInCategory(listProduct, categoryId) {
     for (let i = 0; i < listProduct.length; i++) {
         if (!listProduct[i].isDelete && listProduct[i].categoryId === categoryId) {
             return true;
         }
     }
     return false;
 }

 // use ES6
 function isHaveProductInCategoryEs6(listProduct, categoryId) {
     return listProduct.find(product => !product.isDelete && product.categoryId == categoryId) ? true : false;
 }

 // --------task 16 ---------------------
 // use for 
 function filterProductBySaleDateToArray(listProduct) {
     let result = [],
         j = 0;
     for (let i = 0; i < listProduct.length; i++) {
         if (!listProduct[i].isDelete && listProduct[i].saleDate > Date.now() / 1000 && listProduct[i].quantity > 0) {
             result[j++] = {
                 id: listProduct[i].id,
                 name: listProduct[i].name
             };
         }
     }
     return result;
 }
 //  use ES6
 function filterProductBySaleDateToArrayByEs6(listProduct) {
     return listProduct.filter(product => !product.isDelete && product.saleDate > Date.now() / 1000).map(product => {
         return {
             id: product.id,
             name: product.name
         }
     })
 }

 //  listProduct[5].delete();
 //  listProduct[6].delete();

 //  console.log(filterProductBySaleDateEs6(listProduct));
 //  console.log(filterProductByQuantity(listProduct));
 //  console.log(filterProductById(listProduct, 1));
 //  console.log(totalProductEs6(listProduct));
 //  console.log(isHaveProductInCategoryEs6(listProduct, 6));
 //  console.log(filterProductBySaleDateToArray(listProduct));