import { TYPES } from "../Actions/shoppingActions";

export const shoppingInitialState = {
    products:[
        {
            idProducto: "001",
            nombre: "Dr. Strange",
            description: "Mister of mystic arts",
            foto: "001",
            precio: "5",
            estatus: "active",
            archivo: "001",
            categoria: "Marvel",
        },
        {
            idProducto: "002",
            nombre: "MarkSman",
            description: "Suicide Squad member",
            foto: "002",
            precio: "5",
            estatus: "active",
            archivo: "002",
            categoria: "DC",
        },
        {
            idProducto: "003",
            nombre: "Katana",
            description: "Suicide Squad member",
            foto: "003",
            precio: "5",
            estatus: "active",
            archivo: "003",
            categoria: "DC",
        },
        {
            idProducto: "004",
            nombre: "Metal Gear Rex",
            description: "Nuclear Armed Bipedal Tank PopFold Metal Gear Series",
            foto: "004",
            precio: "10",
            estatus: "active",
            archivo: "004",
            categoria: "Metal Gear",
        },
        {
            idProducto: "005",
            nombre: "Vault Boy",
            description: "Vault-Tec Mascot",
            foto: "005",
            precio: "5",
            estatus: "active",
            archivo: "005",
            categoria: "Games",
        },
        {
            idProducto: "006",
            nombre: "Saitama",
            description: "The Caped Bald",
            foto: "006",
            precio: "5",
            estatus: "active",
            archivo: "006",
            categoria: "Anime",
        },
    ],
    cart:[]
};

export function shoppingReducer(state, action) {    
    switch (action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.id === action.payload);
            console.log(newItem);

            let itemIncart = state.cart.find(item => item.id === newItem.id);
            
            return itemIncart 
            ? {
                ...state, 
                cart: state.cart.map(item=> 
                    item.id === newItem.id 
                    ? {...item, quantity: item.quantity +1}
                    : item 
                    ),
            }
            :{
                ...state, 
                cart:[...state.cart, {...newItem, quantity: 1}], 
            };
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            
            return itemToDelete.quantity > 1 
            ?{
                ...state, 
                cart: state.cart.map(item => 
                    item.id === action.payload 
                    ? {...item, quantity: item.quantity - 1 }
                    : item 
                ),
            }
            :{ 
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }
        case TYPES.REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            }
        
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        
        default:
            return state;
    }
}