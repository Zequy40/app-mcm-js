import { createSlice } from '@reduxjs/toolkit';

export const origenSlice = createSlice({
    name: 'misCompras',
    initialState: {
        categoria: '',
        myCart: []
    },
    reducers: {
        saveProduct: (state, action) => {
            state.myCart = []
        },
        buyProduct: (state, action) => {
            const { id } = action.payload;
            const existingProductIndex = state.myCart.findIndex(product => product.id === id);
        
            if (existingProductIndex !== -1) {
                // Si el producto ya existe en el carrito, incrementa la cantidad
                state.myCart[existingProductIndex].quantity += 1;
            } else {
                // Si el producto no existe, agrégalo al carrito con cantidad 1
                state.myCart.push({ ...action.payload, quantity: 1 });
            }
        },
        returnProduct: (state, action) => {
            state.myCart = state.myCart.filter(object => object.id !== action.payload)
        }
    }
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { isOpen: false },
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleCart } = cartSlice.actions;

export const { saveProduct, buyProduct, returnProduct } = origenSlice.actions