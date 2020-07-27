import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {Fab, TextField, NativeSelect } from "@material-ui/core";
import AddIcon from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from "@material-ui/icons/Edit";


import { 
    Button, 
    Container, 
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
import { act } from 'react-dom/test-utils';

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



class Catalogos extends Component {
    // state = {  }
    titulo="CATALOGO";
    frnActClave=React.createRef();
    frnActNombre=React.createRef();
    //frnActCategoria=React.createRef();
    frnActObjetivo=React.createRef();
    frnActContenido=React.createRef();

    constructor(props)
    {
      super(props);
      this.state= {
                  value : "Deportiva/Cultural/Civica",
                  edit:false,
                  idCatalogo: 0,
                  catalogoA: []
                };
 
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

      

      addActividad = event => {
        var newState = this.state;
       // alert('Estas anadiendo' + this.state.value+this.frnActClave.value+this.frnActNombre.value+this.state.edit);
       // event.preventDefault();
        const data = {actClave:this.frnActClave.value, 
                      actNombre:this.frnActNombre.value, 
                      actCategoria:this.state.value,
                      actObjetivo:this.frnActObjetivo.value, 
                      actContenido:this.frnActContenido.value}
        if (!this.state.edit)
        {
           const url = 'http://localhost:4000/api/actividades/';
           axios.post(url,data).then(res => console.log(res.data));
           this.frnActClave.value="";
           this.frnActNombre.value="";
           this.frnActObjetivo.value="";
           this.frnActContenido.value="";
           this.frnActClave.focus();
           this.frnActNombre.focus();
           this.frnActObjetivo.focus();
           this.frnActContenido.focus();
       
           
        }
        else
        {
           const url ='http://localhost:4000/api/actividades/'+this.state.id;
           const data = {actClave:this.frnActClave.value, 
                        actNombre:this.frnActNombre.value, 
                        actCategoria:this.state.value,
                        actObjetivo:this.frnActObjetivo.value, 
                        actContenido:this.frnActContenido.value}

           axios.put(url,data).then(res => console.log(res.data));
           this.frnActClave.value="";
           this.frnActNombre.value="";
           this.frnActObjetivo.value="";
           this.frnActContenido.value="";
           this.frnActClave.focus();
           this.frnActNombre.focus();
           this.frnActObjetivo.focus();
           this.frnActContenido.focus();
           this.frnActClave.focus();
        }
        newState.edit = false;
        this.setState(newState);
        this.loadActividades();
        this.loadActividades();
        this.loadActividades();
      

    }
 
    viewActividad =(row) => event=>
    {
      event.preventDefault();
      var newState = this.state;
      this.frnActClave.value="";
      this.frnActNombre.value="";
      this.frnActObjetivo.value="";
      this.frnActContenido.value="";
      this.frnActClave.focus();
      this.frnActNombre.focus(); 
      this.frnActObjetivo.focus();
      this.frnActContenido.focus();
      this.frnActNombre.value=this.state.catalogoA[row].actNombre;
      this.frnActNombre.focus();
      newState.edit=false;
      this.setState(newState);
      //alert('Estas viendo' + this.state.value+this.frnActClave.value+this.frnActNombre.value+this.state.edit);

    }

    editActividad =(id,row)=> event =>
    {
      event.preventDefault();
      var newState = this.state;
      newState.edit = true;
      newState.id =id;
      this.setState(newState);
      this.frnActClave.focus();
      this.frnActNombre.focus();
      this.frnActObjetivo.focus();
      this.frnActContenido.focus();
      this.frnActClave.value = this.state.catalogoA[row].actClave;
      this.frnActNombre.value = this.state.catalogoA[row].actNombre;
      this.frnActObjetivo.value=this.state.catalogoA[row].actObjetivo;
      this.frnActContenido.value=this.state.catalogoA[row].actContenido;
      this.frnActClave.focus();
      var newState2 =this.state;
      newState2.value=this.state.catalogoA[row].actCategoria;
      this.setState(newState2);
     // alert('Estas anadiendo' + this.state.value+this.frnActClave.value+this.frnActNombre.value+this.state.edit);
    }

    deleteActividad =(id) => event =>
    {
      //event.preventDefault();
      const url ='http://localhost:4000/api/actividades/'+id;
      axios.delete(url).then(res => console.log(res.data));
      this.frnActClave.value="";
      this.frnActNombre.value="";
      this.frnActObjetivo.value="";
      this.frnActContenido.value="";
      this.frnActClave.focus();
      this.frnActNombre.focus();
      this.frnActObjetivo.focus();
      this.frnActContenido.focus();
    
      this.loadActividades();
      this.loadActividades();
      this.loadActividades();
      console.log(url);

    }

    loadActividades()
    {
        axios.get('http://localhost:4000/api/actividades')
        .then (res => {
          this.setState({catalogoA:res.data});
          //console.log(res.data);
        })

    }
     
    componentDidMount()
    {
      this.loadActividades();
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
                <h4> CATALOGO DE ACTIVIDADES COMPLEMENTARIAS </h4>
            <div className = "App-catalogo">
            <form autoComplete="off" onSubmit={this.addActividad} >
               
                <Button
                            variant="contained"
                            color="default"
                            size="small"
                            onClick = {this.addActividad}
                        >
                        Registro
                </Button> 
                &nbsp;&nbsp;
                <br></br>
                <FormControl margin="1">
                <InputLabel htmlFor="demo-customized-select-native">Categoria</InputLabel>
                <NativeSelect
                id="demo-customized-select-native"
                value={this.state.value}
                onChange={this.handleChange}
                inputRef ={e=>(this.frnActCategoria=e)}
                input={<BootstrapInput />}
                >
                <option value="Deportiva/Cultural/Civica">Deportiva/Cultural/Civica</option>
                <option value="Mooks">Mooks</option>
                <option value="Concurso">Concurso</option>
                <option value="Congreso">Congreso</option>
                <option value="Tutorias">Tutorias</option>
                </NativeSelect>
                </FormControl>
                &nbsp;&nbsp;
                <TextField
                    label ="Clave: "
                    type = "number"
                    margin = "Normal"
                    variant = "outlined"
                    focused ="on"
                    align = "left"
                    inputRef ={e=>(this.frnActClave=e)}
               />
                &nbsp;&nbsp;
                <TextField
                    label ="Nombre de Actividad: "
                    type = "text"
                    margin = "Normal"
                    variant = "outlined"
                    align = "left"
                    focused = "on"
                    inputRef ={e=>(this.frnActNombre=e)}
               />
               &nbsp;&nbsp;
                
               <TextField className = "Date_text"
                    label ="Objetivo: "
                    type = "text"
                    margin = "Normal"
                    variant = "outlined"
                    align = "left"
                    focused = "on"
                    inputRef ={e=>(this.frnActObjetivo=e)}
               />
                <br></br>
               <TextField 
                    label ="Contenido Temático: "
                    type = "memo"
                    margin = "Normal"
                    variant = "outlined"
                    align = "left"
                    focused = "on"
                  
                    inputRef ={e=>(this.frnActContenido=e)}
               />

            </form>

            <List
                    component="nav"
                    subheader= {<ListSubheader component="div">{this.titulo}</ListSubheader>}
                    >
                    { this.state.catalogoA.map((actividad,index) => (
                        <ListItem button key ={index}>
                            <ListItemIcon onClick ={this.viewActividad(index)}>
                            <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary={actividad.actClave} />
                            <ListItemText inset primary={actividad.actNombre} />
                            <ListItemText inset primary={actividad.actCategoria} />
                            <ListItemText inset primary={actividad.actObjetivo} />
                            <ListItemText inset primary={actividad.actContenido} />
                            <ListItemIcon onClick = {this.editActividad(actividad.id,index)}>
                            <EditIcon/>
                            </ListItemIcon>
                            <ListItemIcon onClick = {this.deleteActividad(actividad.id)}>
                              <DeleteIcon/>
                            </ListItemIcon>
                        </ListItem>

                    ))}

                </List>

            </div>
            </div>
        );
    }
}
export default Catalogos;