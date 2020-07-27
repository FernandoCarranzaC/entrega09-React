import React, {Component } from 'react';

import Header from './Header';
import InscripcionesView from '../view/Inscripciones';
import Footer from './Footer';

class Inscripciones extends  Component {
    state={   }
    render() {
        return(
            <div>
                <Header/>
                <InscripcionesView/>
                <Footer/>
            </div>
        );
    }

}
export default Inscripciones;