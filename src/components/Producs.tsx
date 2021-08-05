import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../asyncActions/products'
import {setChosenProducts, addProductsAction} from '../actions/products'
import {withRouter} from "react-router";

interface ProductsProps{
    products: [{
        category: string
    }],
    fetchProducts(currentCategory: string):void,
    setChosenProducts(categoryProducts: { category: string; }[]):void
    match: {
        params: {
            category:string
        }
    },
    loading: boolean,
    chosenProducts: {
        id: number,
        title: string,
        price: number
    }[]
}



export class Products extends React.Component<ProductsProps>{
    constructor(props: any){
        super(props);
        this.state = {
            error: null
        }
    }
    showProducts(){
        const currentCategory = this.props.match.params.category;
        console.log(currentCategory)
        const categoryProducts = this.props.products.filter(item=> item.category === currentCategory)
        if(categoryProducts.length === 0){
            this.props.fetchProducts(currentCategory)    
        }
        else {
            this.props.setChosenProducts(categoryProducts)
            
        }
    }
    componentDidMount(){
        this.showProducts()
    }
    componentDidUpdate(prevProps: any){
        if(prevProps.match.params.category !==this.props.match.params.category)
        this.showProducts()
    }
    
    render(){
        if(this.props.loading === true)
            return "LoaDing!"
        if(this.props.chosenProducts.length === 0)
            return "nothing found"
        return (
            <>{this.props.chosenProducts.map(item=> <div key={item.id}>{item.title} <strong>{item.price}</strong></div>)}</>
        )
    }
}
interface RootState{
    products: {products: 
        [{
        category: string
        }],
        chosenProducts: [],
        loading: boolean}
}

const mapStateToProps = (state: RootState) => ({
    products:state.products.products,
    chosenProducts: state.products.chosenProducts,
    loading: state.products.loading
})
const mapDispatchToProps = {fetchProducts, setChosenProducts, addProductsAction};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products))
