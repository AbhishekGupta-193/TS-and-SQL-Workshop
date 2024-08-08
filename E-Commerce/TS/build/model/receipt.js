"use strict";
// 2. Place order for particular product and display the receipt of that order
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = void 0;
class Receipt {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.total_bill = price * quantity;
    }
}
exports.Receipt = Receipt;
