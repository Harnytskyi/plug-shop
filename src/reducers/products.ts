const defaultState = {
    products: [],
    chosenProducts: [],
    loading: false,
    error: null
}

interface IAddProductsCategories{
    type: string,
    payLoad: []
}
interface ISetError{
    type: string,
    payLoad: string
}
interface ISetLoading{
    type: string
}

const products = (state = defaultState, action: IAddProductsCategories) => {
    switch(action.type){
      case "SET_TOGGLE_LOADING":
        return {
          ...state, loading: !state.loading
        }
      case "ADD_PRODUCTS":
         return{...state, products: [...state.products, ...action.payLoad]}
      case "SET_CHOSEN_PRODUCTS":
          return{...state, chosenProducts: [...action.payLoad], loading: false}
      case "SET_ERROR_ACTION":
        return{...state, error: action.payLoad}
      default:
        return state
    }
}
export default products
 