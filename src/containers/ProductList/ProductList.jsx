import React from 'react';
import ProductItem from '../../components/ProductItem';

import {useSelector} from 'react-redux';


export default function ProductList() {

    const products = useSelector(state => state.productsReducer.products );

    return (

        <main>
            <div className="container">
                <section className="products">
                    {
                        products.map((product, index) => <ProductItem key={index} product={product}/>)
                    }
                </section>
            </div>
        </main>
    )
}
