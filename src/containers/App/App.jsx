/* eslint-disable no-unused-vars */
import React from 'react';
import {useEffect} from 'react';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


import Header from '../Header';
import ProductList from '../ProductList';
import ProductDetail from '../ProductDetail';


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
        <BrowserRouter>
            <div>
                <Header/>

                <Switch>


                    <Route exact path="/" component={ProductList}/>
                    <Route exact path="/product/:id" component={ProductList}/>
                
                </Switch>

            </div>
        </BrowserRouter>

    );

}
