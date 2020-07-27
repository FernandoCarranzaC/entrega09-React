import React, {Component } from 'react';

import Header from './Header';
import EstudiantesView from '../view/Estudiantes';
import Footer from './Footer';

class Estudiantes extends  Component {
    state={   }
    render() {
        return(
            <div>
                <Header/>
                <EstudiantesView/>
                <Footer/>
            </div>
        );
    }

}
export default Estudiantes;