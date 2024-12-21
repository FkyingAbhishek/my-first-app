import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainContent extends Component{

    state={
        pageTitle:"Customers",
        customersCount:5,
        customers:[{id:1,Photos:"https://picsum.photos/60/60",Name:"Abhi",DuesAmount:1000,Phone:1234,address:{city:"peris"}},
            {id:2,Photos:"https://picsum.photos/id/1020/60/60",Name:"Anku",DuesAmount:2000,Phone:1234,address:{city:"London"}},
            {id:3,Photos:"https://picsum.photos/60/60",Name:"Abhishek",DuesAmount:0,Phone:1234,address:{city:"Jhanjharpur"}},
            {id:4,Photos:"https://picsum.photos/60/60",Name:"Avinash",DuesAmount:0,Phone:1234,address:{city:"mumbai"}},
            {id:5,Photos:"https://picsum.photos/60/60",Name:"Sumit" ,DuesAmount:1000,address:{city:"delhi"}}
        ],
    } 

    render(){
        return(  
            <div>
                <h4 className="border-bottom m-1 p-1">{this.state.pageTitle} 
                    <span className=" badge-secondary m-2">{this.state.customersCount}</span>
                    <button className="btn btn-info" onClick={this.onRefreshClick }>refresh</button>
                </h4> 

                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Dues Amount</th> 
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.getCustomersrow()}
                    </tbody> 
                </table>  
            </div>
        );
    }

    onRefreshClick=()=>{
        //console.log("refresh clicked");
        this.setState({
            customersCount:7,                
        });
    } 

    getPhonetoRender(phone){
        return ( phone!=null)? phone:"No Phone";

    }

    getCustomersrow(){
        return(this.state.customers.map((cust,index) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td> <img src={cust.Photos} alt="Customers" /> 
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust,index);}}>Change Picture</button>
                        </div>
                    </td>
                    <td>{cust.Name}</td>
                    <td>{cust.DuesAmount===0?"No Dues":cust.DuesAmount}</td>
                    <td>{this.getPhonetoRender(cust.Phone)}</td>  
                    <td>{cust.address.city}</td>
                </tr>
            );
        }));
    }

    onChangePictureClick(cust,index){
        //console.log(cust)
        var custArr=this.state.customers;
        custArr[index].Photos="https://picsum.photos/60/60";
        this.setState({customers:custArr}); 
    }
}