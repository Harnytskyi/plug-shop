const defaultState = {
    categories: []
}
interface IAddProductsCategories{
    type: string,
    payLoad: []
}
const categoriesReducer = ( state = defaultState, action: IAddProductsCategories) => {
    switch(action.type){
    case "ADD_CATEGORIES":
       return{...state, categories: [...action.payLoad]}
    default:
        return state
    }
}

export default categoriesReducer