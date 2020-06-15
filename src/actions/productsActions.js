import {GET_PRODUCTS, SET_PRODUCTS} from '../actionTypes/productsTypes';

export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}


export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

