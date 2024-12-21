import React,{Component} from "react";
import Product from "./Product";

export default class ShoppingCart extends Component{

    state={products:[{id:1,productName:"iphone",productPrice:5000,quantity:20},
        {id:2,productName:"Xiomi",productPrice:15000,quantity:20},
        {id:3,productName:"ZenPhone",productPrice:5000,quantity:20},
        {id:3,productName:"Apple",productPrice:55000,quantity:20},
        {id:4,productName:"iPad",productPrice:52000,quantity:20},
        {id:5,productName:"Samsung",productPrice:34000,quantity:20}
    ]} 

    render(){
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">{this.state.products.map((prod)=>{return <Product key={prod.id} 
                 Id={prod.id} productName={prod.productName} productPrice={prod.productPrice} quantity={prod.quantity} />})}</div> 
            </div>
        );
    }
}