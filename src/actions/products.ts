
export const addProductsAction = (payLoad: []) => ({type: "ADD_PRODUCTS", payLoad})
export const setChosenProducts = (payLoad: []) => ({type: "SET_CHOSEN_PRODUCTS", payLoad})
export const setToggleLoading = () => ({type: "SET_TOGGLE_LOADING" })
export const setErrorAction = (payLoad: string) => ({type: "SET_ERROR_ACTION", payLoad})
