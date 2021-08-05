import React from 'react'
import {fetchCategories, fetchProducts} from '../asyncActions/products'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

interface CategoryProps{
    fetchCategories(): any,
    categories: []
}
interface RootState{
    categoriesReducer: {categories: []}
}

export class NavBar extends React.Component<CategoryProps>{
    

    componentDidMount(){
        this.props.fetchCategories()
    
    }

    render(){
        return (
            <>
            <Link to={'/'}><button>PlugShop</button></Link>
            {this.props.categories.length === 0 ? <div>Loading...</div> : this.props.categories.map(item=> 
                <Link key={item} to={`/products/${item}`}>
                    <button style={{'backgroundColor': "azure"}} >{item}</button>
                </Link>    
                    )}
            </>
                
            
        )
    }
}
const mapStateToProps = (state: RootState) => ({
    categories: state.categoriesReducer.categories,
})
const mapDispatchToProps = {fetchCategories};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)