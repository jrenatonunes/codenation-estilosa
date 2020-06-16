import React from 'react';
import { FiShoppingBag } from "react-icons/fi";


export default function Header() {
    return (
        <header>
            
            <div className="container">
                <nav>

                    <img className="logo" src="estilosa2.png" alt="estilosa"></img>
                    <div className="logoname">estilosa</div>


                    <input className="search" type="text" name="" id=""/>

                    <div className="cart">
                        <FiShoppingBag className="cart__icon"/>
                        <span>99</span>
                    </div>


                </nav>

            </div>

        </header>
    )
}

