"use strict";
// 2. Place order for particular product and display the receipt of that order
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
const Products_List = [];
function add_products(product) {
    Products_List.push(product);
    console.log("Product Added Successfully...");
    console.log("The final Products List is: ", Products_List);
}
const product1 = new product_1.Product("Polo TShirt", 600, 10, ["Good", "Worth it", "Not Bad"], 4.1);
add_products(product1);
const product2 = new product_1.Product("Cotton Trouser", 950, 6, ["Great fit", "Best", "Awesome"], 4.9);
add_products(product2);
const product3 = new product_1.Product("Slipper", 700, 18, ["Worse", "Defective", "Average"], 2.6);
add_products(product3);
