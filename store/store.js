import {configureStore} from '@reduxjs/toolkit';
import {origenSlice, cartSlice} from './slice';


export default configureStore({
    reducer:{
        cart: cartSlice.reducer,
        misCompras: origenSlice.reducer
    }
})