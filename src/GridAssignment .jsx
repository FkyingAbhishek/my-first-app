import React, { Component } from "react";
export default class GridAssignment  extends Component{

    state={Product:[{Id:1,productName:"iPhone",price:50000,quantity:10 },
        {Id:2,productName:"Samsung",price:40000,quantity:10 },
        {Id:3,productName:"Nokia",price:30000,quantity:10 },
        {Id:4,productName:"ZenPhonef",price:60000,quantity:10 },
        {Id:5,productName:"LG",price:50000,quantity:10 },
        {Id:6,productName:"Xiomi",price:12000,quantity:10 },
        {Id:7,productName:"Mi",price:12000,quantity:10 }
    ]}

    render(){ 
        return(
            <React.Fragment>
                <table className="table">
                     <thead>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Net Price</th>
                     </thead>
                     <tbody>
                            { this.netPriceCalculator() }
                     </tbody>
                </table> 
            </React.Fragment>
            
        );
    }

    netPriceCalculator() {
        return (this.state.Product.map((prodname,index)=>(
            <tr key={index}>
                <td>{prodname.Id}</td>
                <td>{prodname.productName}</td>
                <td>{prodname.price}</td>
                <td>{prodname.quantity}</td>
                <td>{prodname.quantity * prodname.price}</td> {/* Multiplied value */}
          </tr>
        )));
    }
}