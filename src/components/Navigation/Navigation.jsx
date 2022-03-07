import React from "react";
import "./Navigation.css";

const Navigation = () =>{
    return(
        <div className="navBar">
            
                <ul className="navItems">
                    <li className="logo"> <a href="#">Fanstastic Films</a> </li>
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">Popular Films</a> </li>
                    <li> <a href="#">About the developer</a> </li>
                </ul>
        </div>
    
    
    );

}



export default Navigation;
