import React, { Component } from "react";
import Product from "./Product";  // Assuming this is a component that displays individual product details

export default class ShoppingCart extends Component {
    // Define the products in the state
    state = {
        products: [
            { id: 1, productName: "iPhone", productPrice: 5000, quantity: 20 },
            { id: 2, productName: "Xiomi", productPrice: 15000, quantity: 20 },
            { id: 3, productName: "ZenPhone", productPrice: 5000, quantity: 20 },
            { id: 4, productName: "Apple", productPrice: 55000, quantity: 20 }, // Updated id from 3 to 4
            { id: 5, productName: "iPad", productPrice: 52000, quantity: 20 },
            { id: 6, productName: "Samsung", productPrice: 34000, quantity: 20 }  // Updated id from 4 to 6
        ]
    };

    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {/* Loop through products and display each in the Product component */}
                    {this.state.products.map((prod) => {
                        return (
                            <Product 
                                key={prod.id} 
                                id={prod.id} 
                                productName={prod.productName} 
                                productPrice={prod.productPrice} 
                                quantity={prod.quantity} 
                            > <button className="btn btn-primary">Buy Now</button>
                            </Product> 
                        );
                    })}
                </div>
            </div>
        );
    }
}
