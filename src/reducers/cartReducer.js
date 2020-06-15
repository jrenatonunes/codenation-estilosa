import {GET_CART} from '../actionTypes/cartTypes';

const INITIAL_STATE = {
    cart: [],
    totalCartProducts: 0
}



function cartReducer ( state = INITIAL_STATE, action ) {

    switch (action.type) {
        case GET_CART:
            return state;
    
        default:
            return state;
    }
}


export default cartReducer;
