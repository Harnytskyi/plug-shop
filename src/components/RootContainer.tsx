import React from 'react';
import { ResolvedModuleWithFailedLookupLocations } from 'typescript';
import Navbar from './Navbar'
import Products from './Producs';

class RootContainer extends React.Component {
    render(){
        return (
            <>
                <Navbar/>
                <Products/>
            </>
        )
    }
}
export default RootContainer