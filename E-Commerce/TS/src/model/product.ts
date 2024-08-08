// 2. Place order for particular product and display the receipt of that order

export class Product{
    public name:string;
    public price:number;
    public in_stock:number;
    public reviews:string[];
    public avg_rating:number;

    constructor(name:string,price:number,in_stock:number,reviews:string[],avg_rating:number){
        this.name=name;
        this.price=price;
        this.in_stock=in_stock;
        this.reviews=reviews;
        this.avg_rating=avg_rating;
    }
}