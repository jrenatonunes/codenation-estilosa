/* eslint-disable no-unused-vars */
import React from 'react';
import {useEffect} from 'react';

import Loading from '../../components/Loading';

import Header from '../Header';
import ProductList from '../ProductList';

import {setProducts} from '../../actions/productsActions';
import {useSelector, useDispatch} from 'react-redux';


export default function App() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.productsReducer.products);


    useEffect( () => {

        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then(data => data.json() )
        .then(data => dispatch(setProducts(data)));

    }, [dispatch]);


    return (
        <div>
            <Header/>
            <ProductList/>
        </div>
    );

}
