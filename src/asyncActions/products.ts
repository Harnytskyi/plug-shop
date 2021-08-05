import { addProductsAction, setChosenProducts, setToggleLoading, setErrorAction } from "../actions/products"
import {addCategoriesAction} from '../actions/categories'

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


export const fetchCategories = () => {
    return function(dispatch: (arg: IAddProductsCategories | ISetError)=>(IAddProductsCategories | ISetError)) {
        fetch('https://fakestoreapi.com/products/categories')
  .then(response => response.json())
  .then(json => dispatch(addCategoriesAction(json)))
  .catch(error => dispatch(setErrorAction(error)))
    }
}
export const fetchProducts = (category: string) => {
    return function(dispatch: (arg: IAddProductsCategories | ISetError|ISetLoading )=>(IAddProductsCategories | ISetError )){
        dispatch(setToggleLoading())
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(fetchHandler, error =>  {console.log(error); dispatch(setErrorAction(String(error)))})
            .then(json => {
                console.log('fetched products')
                dispatch(setChosenProducts(json))
                dispatch(addProductsAction(json))
                
            }, error => {console.log(error)
                dispatch(setErrorAction(error.status))
            })

    }
}
interface response{
    status: number
    json: any
}
function fetchHandler(res: response){
  if (res.status >= 400 && res.status < 600) {
    return Promise.reject(res);
  }
  return res.json();
}