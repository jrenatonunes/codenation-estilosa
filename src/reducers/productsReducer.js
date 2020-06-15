import {GET_PRODUCTS, SET_PRODUCTS} from '../actionTypes/productsTypes';


const INITIAL_STATE = {
    products: []
}


function productsReducer( state = INITIAL_STATE, action ) {

    switch (action.type) {

        case GET_PRODUCTS:
            return state;

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
    
        default:
            return state;
    }

}

export default productsReducer;

