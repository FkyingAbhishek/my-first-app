import { extend } from "jquery";
import React,{Component} from "react";
import { Navbar } from "./NavBar";
import MainContent from "./MainContent";
import ShoppingCart from "./ShoppingCart";
import GridAssignment  from "./GridAssignment ";
export default class App extends 
Component
{
    render()
    {
        return ( 
        <React.Fragment>
            <Navbar /> 
            {/* <ShoppingCart /> */}
            <MainContent />
            <GridAssignment  /> 
        </React.Fragment> 
        );
    }
}