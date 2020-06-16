import React from 'react';
import { FiShoppingBag } from "react-icons/fi";

import {Link} from 'react-router-dom';



export default function Header() {
    return (
        <header>
            
            <div className="container">
                <nav>

                    <Link to="/">
                        <img className="logo" src="estilosa2.png" alt="estilosa"></img>
                    </Link>
                    
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="logoname">estilosa</div>
                    </Link>


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

