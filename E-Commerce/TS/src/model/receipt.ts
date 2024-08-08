// 2. Place order for particular product and display the receipt of that order

export class Receipt {
    public name: string;
    public price: number;
    public quantity: number;
    public total_bill: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.total_bill = price * quantity;
    }
}