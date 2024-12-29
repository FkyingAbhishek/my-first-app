 import React,{Component} from "react";
export default class Product extends Component{
    render(){
        return (
            <div className="col-lg-4">
                <div className="card m-2"> 
                    <div className="card-body">
                    <h4 className="text-muted">Product# {this.props.quantity}</h4>
                    <h5 className="pt-5 border-top">{this.props.productName}</h5>
                    <div>${this.props.productPrice}</div>
                    </div> 
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <span className="badge mr-3">{this.props.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={this.props.onIncriment}>+</button>
                                <button className="btn btn-outline-success" onClick={this.props.onDecrement}>-</button>
                            </div>
                        </div>
                                <div className="float-right">{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
}