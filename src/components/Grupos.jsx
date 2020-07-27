import React, {Component} from  'react';

import Header from './Header';
import GruposView from '../view/Grupos';
import Footer from './Footer';

class Grupos extends Component {
  state ={  }
  render(){
    return(
        <div>
            <Header/>
            <GruposView/>
            <Footer/>
        </div>
    );
  }
}
export default Grupos;