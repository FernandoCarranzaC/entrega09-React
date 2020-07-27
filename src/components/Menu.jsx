import React, {Component} from 'react';
import '../styles/App.css'

import Header from './Header';
import Content from './Content'
import Footer from './Footer'


class Menu extends Component {
  render() {
      return(
          <div>
              <Header/>
              <Content/>
              <Footer/>

          </div>
      );
  }

}
export default Menu;
