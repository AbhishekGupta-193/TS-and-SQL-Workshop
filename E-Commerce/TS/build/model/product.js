"use strict";
// 2. Place order for particular product and display the receipt of that order
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, in_stock, reviews, avg_rating) {
        this.name = name;
        this.price = price;
        this.in_stock = in_stock;
        this.reviews = reviews;
        this.avg_rating = avg_rating;
    }
}
exports.Product = Product;
