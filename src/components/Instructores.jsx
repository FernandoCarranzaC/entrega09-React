import React, {Component} from 'react';

import Header from './Header';
import InstructoresView from '../view/Instructores';
import Footer from './Footer';

class Instructores extends Component {
    state = {   }
    render() {
        return(
            <div>
                <Header/>
                <InstructoresView/>
                <Footer/>
            </div>
        );
    }
}
export default Instructores;