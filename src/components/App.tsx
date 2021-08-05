import React from 'react';
import {connect} from 'react-redux'
import {Route, HashRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Products from './Producs';

interface AppProps {
  error: string | null
}

class App extends React.Component<AppProps> {
  render(){
    if(this.props.error != null)
    return (<div>Error {this.props.error}</div>)
    return (
    <div className="App">
      <HashRouter>
      <Navbar/>
      <Route exact path="/">
        MAIN PAGE
      </Route>
      <Route path="/products/:category">
        <Products/>
      </Route>
      </HashRouter>
    </div>
  );
  }
}

const mapStateToProps = (state: {products: {error: null | string}}) => ({
  error: state.products.error
})

export default connect(mapStateToProps)(App);
