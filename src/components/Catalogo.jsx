import React, {Component} from 'react';

import Header from './Header';
import CatalogoView from '../view/Catalogos';
import Footer from './Footer';

class Catalogo extends Component {
    render() {
        return(
            <div>
                <Header/>
                <CatalogoView/>
                <Footer/>
            </div>
        );
    }
}
export default Catalogo;