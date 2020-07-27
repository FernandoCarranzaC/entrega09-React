import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

class Inscripciones extends Component {
    state = {  }
    render() {
        return(
            <div className = "App-content">
               <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                   
                </Link>
                <h4> INSCRIPCIONES </h4>

            </div>
        );
    }
}
export default Inscripciones;