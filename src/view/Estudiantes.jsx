import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {Fab, TextField, NativeSelect } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";


//import SplitButton from './Desplegable';
//import CustomizedSelects from './MenuDesplegable'


import { Container, 
         Button, 
         List,
         ListItem,
         ListSubheader,
         ListItemText,
         ListItemIcon
} from "@material-ui/core";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(2),
      },
    },
    input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '20px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);


class Estudiantes extends Component {
   
    titulo="ESTUDIANTES"; 
    frnEstNoControl = React.createRef();
    frnEstCarrera =React.createRef();
    frnEstNombre = React.createRef();
   
  
    constructor(props) {
        super(props);
        this.state = {
                    value: "Ingeniería Informática",
                    edit : false,
                    // tb : "off",
                    idEstudiante: 0,
                    estudiantesA: []
                   };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      textoOn(){
        var newState =this.state;
        newState.tb="on";
        this.setState(newState);
      }
      textoOff(){
        var newState =this.state;
        newState.tb="off";
        this.setState(newState);
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

      addEstudiante = event => {

        event.preventDefault();
        var newState = this.state;
       // newState.edit = true;
       // this.setState(newState);


        
        //this.instructores.push(this.frnNombre.value);
       //alert('Estas anadiendo' + this.state.value+this.frnEstNoControl.value+this.frnEstNombre.value);
       // event.preventDefault();
        const data = {estNoControl:this.frnEstNoControl.value, estNombre:this.frnEstNombre.value, estCarrera:this.state.value}
        if (!this.state.edit)
        {
          const url = 'http://localhost:4000/api/estudiantes/';
          axios.post(url,data).then(res => console.log(res.data));
           this.frnEstNoControl.value="";
           this.frnEstNombre.value="";
          this.frnEstNombre.focus();   
          this.frnEstNoControl.focus();
         
          
        }
        else
        {
           const url ='http://localhost:4000/api/estudiantes/'+this.state.id;
           const data = {estNoControl:this.frnEstNoControl.value, estNombre:this.frnEstNombre.value, estCarrera:this.state.value}
           axios.put(url,data).then(res => console.log(res.data));
           this.frnEstNoControl.value="";
           this.frnEstNombre.value="";
          this.frnEstNombre.focus();
          this.frnEstNoControl.focus();
        }
        newState.edit = false;
        this.setState(newState);
        this.textoOff();
        this.loadEstudiantes();
        this.loadEstudiantes(); 
        this.loadEstudiantes();

    }

    viewEstudiante =(row) => event=>
    { var newState = this.state;
      event.preventDefault();
      this.frnEstNoControl.value="";
      this.frnEstNombre.value="";
      this.frnEstNoControl.focus();
      this.frnEstNombre.focus();
      this.frnEstNombre.value=this.state.estudiantesA[row].estNombre;
      newState.edit = false;
      this.setState(newState);
    }

    editEstudiante =(id,row)=> event =>
    {
      event.preventDefault();
      this.textoOn();
      var newState = this.state;
      newState.edit = true;
      newState.id =id;
      this.setState(newState);
      this.frnEstNombre.focus();
      this.frnEstNoControl.focus();
      this.frnEstNoControl.value = this.state.estudiantesA[row].estNoControl;
      this.frnEstNombre.value = this.state.estudiantesA[row].estNombre;
      this.frnEstNoControl.focus();
      var newState2 =this.state;
      newState2.value=this.state.estudiantesA[row].estCarrera;
      this.setState(newState2);
      //this.value=this.state.estudiantesA[row].estCarrera; este si funciona es el original

      //this.frnEstCarrera.value=this.value;
      //this.setState({frnEstCarrera.value : value});
      //this.frnEstCarrera.focus();
    }

    deleteEstudiante =(id) => event =>
    {
      //event.preventDefault();
      const url ='http://localhost:4000/api/estudiantes/'+id;
      axios.delete(url).then(res => console.log(res.data));
      this.frnEstNoControl.value="";
      this.frnEstNombre.value="";
      this.frnEstNombre.focus();
      this.frnEstNoControl.focus();
      this.loadEstudiantes();
      this.loadEstudiantes();
      this.loadEstudiantes();
      console.log(url);
      this.textoOff();

    }

    loadEstudiantes()
    {
        axios.get('http://localhost:4000/api/estudiantes').then (res => {
          this.setState({estudiantesA:res.data});
          console.log(res.data);
        })

    }
 
    componentDidMount()
    {
      this.loadEstudiantes();
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
                <h4> ESTUDIANTES </h4>
                <div className = "App-catalogo">
                <form autoComplete="off" onSubmit={this.addEstudiante}>
             { /*  &nbsp; <div> <SplitButton/>      </div> &nbsp; */}
                  { /* <CustomizedSelects/>*/}
                  { /* < SplitButton/>*/}
                   
                  
                  <FormControl margin="1">
                    <InputLabel htmlFor="demo-customized-select-native" >Carrera</InputLabel>
                    <NativeSelect
                    id="demo-customized-select-native"
                    value={this.state.value}
                    onChange={this.handleChange}
                    inputRef ={e=>(this.frnEstCarrera=e)}
                    input={<BootstrapInput />}
                    >
                    <option value="Ingeniería Informática">Ingeniería Informática</option>
                    <option value="Ingeniería en Sistemas">Ingeniería en Sistemas</option>
                    <option value="Ingeniería Bioquímica">Ingeniería Bioquímica</option>
                    <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                    <option value="Ingenieríe en Gestión">Ingenieríe en Gestión</option>
                    <option value="Licenciatura en Administración">Licenciatura en Administración</option>
                    <option value="Contador Público">Contador Público</option>
                  
                    </NativeSelect>
                    </FormControl>
                &nbsp;&nbsp;
                
                    <TextField 
                        label = "Número de Control: "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        focused = "off"
                        inputRef={e => (this.frnEstNoControl=e)}
                    />    
                    
                     &nbsp; &nbsp;
                     <TextField
                        label = "Nombre:  "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        focused ="off"
                        inputRef={e => (this.frnEstNombre=e)}
                    />
                   &nbsp; &nbsp;
                  
                                                               
                    &nbsp; &nbsp;
                       <Button 
                            variant="contained"
                            color="default"
                            margin = "normal"
                            size="small"
                            align ="20"
                            
                            startIcon={<PersonIcon />}
                            onClick = {this.addEstudiante}
                        >
                        Agregar
                      </Button>
               
                </form>
                <List 
                    component="nav"
                    subheader= {<ListSubheader component="div">{this.titulo}</ListSubheader>}
                    >
                    {this.state.estudiantesA.map((estudiante,index) => (
                        <ListItem button key ={index}>
                            <ListItemIcon onClick={this.viewEstudiante(index)}>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary={estudiante.estNoControl} />
                            <ListItemText inset primary={estudiante.estNombre} />
                            <ListItemText inset primary={estudiante.estCarrera} />
                            <ListItemIcon onClick={this.editEstudiante(estudiante.id,index)}>
                                <EditIcon/>
                            </ListItemIcon>
                            <ListItemIcon onClick={this.deleteEstudiante(estudiante.id)}>
                                <DeleteIcon/>
                            </ListItemIcon>
                        </ListItem>

                    ))}

                </List>
                <div id="box2" class="tbox">
            </div>
            </div>
            </div>
        );
    }
}
export default Estudiantes;