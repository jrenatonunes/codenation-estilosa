import React from 'react';


const printRegularPrice = (regularPrice) => <span className="product_price--strike"><strike>{regularPrice}</strike></span>;
const printActualPrice = (actualPrice) => <span className="product__price--strong"><strong>{actualPrice}</strong></span>;



export default function ProductItem({product}) {

    console.log(product);
    const productImage = product.image || 'no_photo.jpg';

    return (
        <article className="product">

            <div className="product__image">
                <img src={productImage} alt={product.name}></img>
            </div>

            <div className="product__name">{product.name}</div>

            <div className="product__price">
                {(product.regular_price !== product.actual_price)?printRegularPrice(product.regular_price):''} 
                {printActualPrice(product.actual_price)} 
            
            </div>


        </article>
    )
}
