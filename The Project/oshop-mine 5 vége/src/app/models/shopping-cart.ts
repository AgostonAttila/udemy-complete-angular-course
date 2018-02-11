import { Product } from 'app/models/product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {

    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [productID: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};

        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            /*  let x = new ShoppingCartItem(
                  {
                      //title: item.title,
                      //imageUrl : item.imageUrl,
                      //price: item.price,
                      ...item,
                      $key: productId
                  }
              );
              Object.assign(x,item);
              x.$key = productId;*/
            this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
        }
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }


    get totalItemsCount() {
        let count = 0;
        for (let productID in this.itemsMap)
            count += this.itemsMap[productID].quantity;
        return count;
    }
}