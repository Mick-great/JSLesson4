'use strict';
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};
const product1 = new Product('Товар 1', 500);
product1.make25PercentDiscount();

console.log(product1);
