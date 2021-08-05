import React from 'react'

type ProductListProps = {
    products: ProductsObj[] 
}
type ProductsObj = {
    id: number, 
        title: string, 
        category: string, 
        price: number, 
        description: string,
        image: string
}
type ProductListState = {

}

class ProductList extends React.Component<ProductListProps,ProductListState> {
    render(){
        return(<>
            {this.props.products.map((item: ProductsObj) => <div style={{width: "120px", height: "240px"}} key={item.id}>{item.title}</div>)}
            </>
        )
    }
}
export default (ProductList)