import { createSlice } from '@reduxjs/toolkit'
import { db } from '../firebase/firebaseConfig';

const initialState = {
    producto: []
}

const slice = createSlice({
    name: 'productos',
    initialState,
    reducers: {
        stock: (state, actions) => {
            state.producto = (actions.payload)
        }
    }
});

export const { stock } = slice.actions
export const consultaStock = (state) => state.producto.producto
export default slice.reducer