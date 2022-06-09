
'use strict';
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}
const product2 = new Products('Товар 1', 800);
product1.make25PercentDiscount();
console.log(product2);