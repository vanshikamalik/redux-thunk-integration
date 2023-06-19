
const initialState = {
    isFetching: false,
    products: {},
    error: {},
    actionType: ''
  };

const ProductReducer = (state = initialState, action) => {  
    console.log(state,'statestatestate')
    console.log(action,'actionactionactionactionaction')
    switch (action.type) {  
      case 'GET_PRODUCTS':  
        return {  
          ...state,  
          isFetching: false,
          products: action.products,
          actionType: action.type
        }
      default:  
        return state  
    }  
  }  
  export { ProductReducer }   