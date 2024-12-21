import { extend } from "jquery";
import React,{Component} from "react";
export default class Product extends Component{
    render(){
        return (
            <div className="col-lg-2">
                <div className="card m-2"> 
                    <div className="card-body">
                    <h4 className="text-muted">Product# {this.props.Id}</h4>
                    <h5 className="pt-5 border-top">{this.props.productName}</h5>
                    <div>${this.props.productPrice}</div>
                    </div> 
                </div>
            </div>
        );
    }
}