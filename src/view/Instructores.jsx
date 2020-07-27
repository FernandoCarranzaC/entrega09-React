import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {Fab, TextField, NativeSelect } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";



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


class Instructores extends Component {
    //state = {  }
    titulo= "INSTRUCTORES"
    frnInsClave = React.createRef();
    frnInsNombre = React.createRef();
    frnInsDepto = React.createRef();

    constructor(props) {
        super(props);
        this.state = {value: "Servicios Extraescolares",
                      edit : false,
                      idInstructor: 0,
                      instructoresA: []

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

    addInstructor = event => {
      //event.preventDefault();
      var newState = this.state;
        //this.instructores.push(this.frnNombre.value);
       // alert('Estas anadiendo' + this.state.value+this.frnInsClave.value+this.frnInsNombre.value);
       // event.preventDefault();
        const data = {insClave:this.frnInsClave.value, insNombre:this.frnInsNombre.value, insDepto:this.state.value}
        if (!this.state.edit)
        {
           const url = 'http://localhost:4000/api/instructores/';
           axios.post(url,data).then(res => console.log(res.data));
           this.frnInsClave.value="";
           this.frnInsNombre.value="";
           this.frnInsNombre.focus();
           this.frnInsClave.focus();
       
           
        }
        else
        {
           const url ='http://localhost:4000/api/instructores/'+this.state.id;
           const data = {insClave:this.frnInsClave.value, insNombre:this.frnInsNombre.value, insDepto:this.state.value};
           axios.put(url,data).then(res => console.log(res.data));
           this.frnInsClave.value="";
           this.frnInsNombre.value="";
           this.frnInsNombre.focus();
           this.frnInsClave.focus();
        }
        newState.edit = false;
        this.setState(newState);
        this.loadInstructores();
        this.loadInstructores();
        this.loadInstructores();

    }
 
    viewInstructor =(row) => event=>
    {
      event.preventDefault();
      var newState = this.state;
      this.frnInsClave.value="";
      this.frnInsNombre.value="";
      this.frnInsClave.focus();
      this.frnInsNombre.focus();
      this.frnInsNombre.value=this.state.instructoresA[row].insNombre;
      this.frnInsNombre.focus();
      newState.edit=false;
      this.setState(newState);
    }

    editInstructor =(id,row)=> event =>
    {
      event.preventDefault();
      var newState = this.state;
      newState.edit = true;
      newState.id =id;
      this.setState(newState);
      this.frnInsClave.focus();
      this.frnInsNombre.focus();
      this.frnInsClave.value = this.state.instructoresA[row].insClave;
      this.frnInsNombre.value = this.state.instructoresA[row].insNombre;
      this.frnInsClave.focus();
      var newState2 =this.state;
      newState2.value=this.state.instructoresA[row].insDepto;
      this.setState(newState2);
    }

    deleteInstructor =(id) => event =>
    {
      //event.preventDefault();
      const url ='http://localhost:4000/api/instructores/'+id;
      axios.delete(url).then(res => console.log(res.data));
      this.frnInsClave.value="";
      this.frnInsNombre.value="";
      this.frnInsNombre.focus();
      this.frnInsClave.focus();
      this.loadInstructores();
      this.loadInstructores();
      this.loadInstructores();
      console.log(url);

    }

    loadInstructores()
    {
        axios.get('http://localhost:4000/api/instructores')
        .then (res => {
          this.setState({instructoresA:res.data});
          //console.log(res.data);
        })

    }
     
    componentDidMount()
    {
      this.loadInstructores();
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
                <div className = "App-catalogo">
                <form autoComplete="off" onSubmit={this.addInstructor}>
             { /*  &nbsp; <div> <SplitButton/>      </div> &nbsp; */}
                  { /* <CustomizedSelects/>*/}
                  { /* < SplitButton/>*/}

                    <FormControl >
                        <InputLabel htmlFor="demo-customized-select-native">Departamento</InputLabel>
                        <NativeSelect
                        id="demo-customized-select-native"
                        value={this.state.value}
                        onChange={this.handleChange}
                        inputRef ={e=>(this.frnInsDepto=e)}
                        input={<BootstrapInput />}
                        >
                        <option value="Servicios Extraescolares">Servicios Extraescolares</option>
                        <option value="Desarrollo Academico">Desarrollo Academico</option>
                        <option value="Sistemas y Computacion">Sistemas y Computacion</option>
                        <option value="Ciencias Básicas">Ciencias Básicas</option>
                        <option value="Instrustrial">Instrustrial</option>
                        <option value="Química y Bioquímica">Química y Bioquímica</option>
                        <option value="Económico Administrativas">Económico Administrativas</option>
                        </NativeSelect>
                    </FormControl>
                   
                    &nbsp; &nbsp; 
                    <TextField
                        label = "Clave: "
                        type = "number"
                        margin= "normal"
                        variant="outlined"
                        focused = "on"
                        inputRef={e => (this.frnInsClave=e)}
                    />    
                    
                     &nbsp; &nbsp;
                     <TextField
                        label = "Nombre:  "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        focused = "on"
                        inputRef={e => (this.frnInsNombre=e)}
                    />
                   &nbsp; &nbsp;
                  
                   {/*  <TextField
                        label = "Departamento: "
                        type = "text"
                        margin= "normal"
                        variant="outlined"
                        inputRef={i => (this.frnDepto)}
                   />*/}
                                            
                    &nbsp; &nbsp;
                       <Button 
                            variant="contained"
                            color="default"
                            margin = "normal"
                            size="small"
                            align ="20"
                            
                            startIcon={<PersonIcon />}
                            onClick = {this.addInstructor}
                        >
                        Agregar
                      </Button>
               
                </form>
                <List
                    component="nav"
                    subheader= {<ListSubheader component="div">{this.titulo}</ListSubheader>}
                    >
                    { this.state.instructoresA.map((instructor,index) => (
                        <ListItem button key ={index}>
                            <ListItemIcon onClick ={this.viewInstructor(index)}>
                            <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary={instructor.insClave} />
                            <ListItemText inset primary={instructor.insNombre} />
                            <ListItemText inset primary={instructor.insDepto} />
                            <ListItemIcon onClick = {this.editInstructor(instructor.id,index)}>
                            <EditIcon/>
                            </ListItemIcon>
                            <ListItemIcon onClick = {this.deleteInstructor(instructor.id)}>
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
export default Instructores;
