import { Product } from "app/models/product";

export class ShoppingCartItem {
    $key: string;
    title : string;     
    imageUrl : string; 
    price : number; 
    quantity : number; 
  
    constructor( init? : Partial<ShoppingCartItem>){
        Object.assign(this,init);
    }

   // constructor(public product: Product,public quantity: number) {   }  

    get totalPrice() { return this.price * this.quantity; }

}