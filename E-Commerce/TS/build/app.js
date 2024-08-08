"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const product_1 = require("./model/product");
const service_1 = require("./services/service");
const service_2 = require("./services/service");
const service_3 = require("./services/service");
console.log("Welcome to E-Commerce System");
let flag = true;
while (flag == true) {
    console.log("1: Add New Product");
    console.log("2: Order Product");
    console.log("3: Show Receipt");
    let i = readlineSync.question("Enter Your Choice  ");
    switch (i) {
        case '1': {
            let name = readlineSync.question("Enter Product Name : ");
            let price = readlineSync.question("Enter the Price : ");
            let in_stock = readlineSync.question("Enter the Quantity available in Stock : ");
            function getReviews() {
                const reviews = [];
                let more = true;
                while (more) {
                    const review = readlineSync.question("Enter a review (or type 'done' to finish): ");
                    if (review.toLowerCase() === 'done') {
                        more = false;
                    }
                    else {
                        reviews.push(review);
                    }
                }
                return reviews;
            }
            let reviews = getReviews();
            let avg_rating = readlineSync.question("Enter rating : ");
            let p1 = new product_1.Product(name, parseInt(price), parseInt(in_stock), reviews, parseFloat(avg_rating));
            (0, service_1.add_products)(p1);
            readlineSync.question();
            break;
        }
        case '2': {
            let commodity = readlineSync.question('Enter the commodity you want to order? ');
            let quantity = readlineSync.question('Enter the quanity required? ');
            (0, service_2.place_order)(commodity, parseInt(quantity));
            readlineSync.question();
            break;
        }
        case '3': {
            (0, service_3.display_receipt)();
            readlineSync.question();
            break;
        }
        default: {
            flag = false;
            break;
        }
    }
}
