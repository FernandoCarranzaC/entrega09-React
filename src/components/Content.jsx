import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Container,Button} from "@material-ui/core";


class Content extends Component {
 state = {  }
 render() {
     return(
         <div className = "App-content">
             <Container maxWidth ="lg">
                 <Link to ="/catalogo">
                 <Button variant="contained" color= "default"> Catalogo</Button>
                 </Link>
                &nbsp;&nbsp;
                <Link to ="/instructores">
                    <Button variant="contained"  color="default">Instructores</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/estudiantes">
                    <Button variant="contained" color="default">Estudiantes</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/grupos">
                    <Button variant="contained" color="default">Grupos</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/inscripciones">
                    <Button variant="contained" color="default">Inscripciones</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/constancias">
                    <Button variant="contained" color="default">Constancias</Button>
                </Link>
             </Container>
         </div>
     );
 }

}
export default Content;
