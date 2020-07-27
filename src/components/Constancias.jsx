import React, {Component} from 'react';

import Header from './Header';
import ConstanciasView from '../view/Constancias';
import Footer from './Footer';

class Constancias extends Component {
    state = {  }
    render() {
        return(
            <div>
                <Header/>
                <ConstanciasView/>
                <Footer/>
            </div>
        );
    }

}
export default Constancias;
