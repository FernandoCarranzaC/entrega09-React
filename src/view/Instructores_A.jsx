import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from '@material-ui/icons/Person';
import SplitButton from './Desplegable';


import { Container, 
         Button, 
         List,
         ListItem,
         ListSubheader,
         ListItemText,
         ListItemIcon
} from "@material-ui/core";



class Instructores extends Component {
    //state = {  }
    titulo= "INSTRUCTORES"
    instructores = ["Ricardo Gonzalez", "Erick Dalet", "Othoniel Rivera "]
    frnClave = React.createRef();
    frnNombre = React.createRef();
    frnDepto = React.createRef();



    addInstructor = event => {
        this.instructores.push(this.frnNombre.value);
        
    }
 

     

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
                <h4> INSTRUCTORES </h4>
                <form autoComplete="off" onSubmit={this.addInstructor}>
                    <TextField
                        label = "Clave: "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        inputRef={i => (this.frnClave)}
                    />     &nbsp;
                    
                     &nbsp;
                     <TextField
                        label = "Nombre:  "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        inputRef={i => (this.frnNombre)}
                    />
                    &nbsp; 

                     <TextField
                        label = "Departamento: "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        inputRef={i => (this.frnDepto)}
                    />
                        &nbsp; &nbsp; 
                     <SplitButton/>      
                    &nbsp; &nbsp; 
                   
                      
                       <Button
                            variant="contained"
                            color="default"
                            size="small"
                            startIcon={<PersonIcon />}
                            onClick = "this.addInstructor"
                        >
                        Agregar
                      </Button>
                </form>
                <List
                    component="nav"
                    subheader= {<ListSubheader component="div">{this.titulo}</ListSubheader>}
                    >
                    { this.instructores.map((instructor) => (
                        <ListItem button key ={instructor}>
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary={instructor} />
                        </ListItem>

                    ))}

                </List>
            </div>
        );
    }
}
export default Instructores;