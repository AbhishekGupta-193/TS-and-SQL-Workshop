
import * as readlineSync from 'readline-sync';
import { Product } from './model/product';
import { add_products } from './services/service';
import { place_order } from './services/service';
import { display_receipt } from './services/service';

console.log("Welcome to E-Commerce System");

let flag = true
while (flag == true) {
    console.log("1: Add New Product")
    console.log("2: Order Product")
    console.log("3: Show Receipt")
    let i = readlineSync.question("Enter Your Choice  ")
    switch (i) {
        case '1': {
            let name = readlineSync.question("Enter Product Name : ");
            let price = readlineSync.question("Enter the Price : ");
            let in_stock = readlineSync.question("Enter the Quantity available in Stock : ");
            
            function getReviews(): string[] {
                const reviews: string[] = [];
                let more = true;

                while (more) {
                    const review = readlineSync.question("Enter a review (or type 'done' to finish): ");
                    if (review.toLowerCase() === 'done') {
                        more = false;
                    } else {
                        reviews.push(review);
                    }
                }

                return reviews;
            }

            let reviews = getReviews();
            let avg_rating = readlineSync.question("Enter rating : ");

            let p1 = new Product(name, parseInt(price), parseInt(in_stock), reviews, parseFloat(avg_rating));
            add_products(p1);
            readlineSync.question();
            break;
        }
        case '2': {
            let commodity =readlineSync.question('Enter the commodity you want to order? ');
            let quantity =readlineSync.question('Enter the quanity required? ');
            place_order(commodity,parseInt(quantity));
            readlineSync.question();
            break;
        }
        case '3': {
            display_receipt();
            readlineSync.question();
            break;
        }
        default: {
            flag = false;
            break;
        }
    }
}