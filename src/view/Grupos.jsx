import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {Fab, TextField, NativeSelect } from "@material-ui/core";
import AddIcon, { NewReleasesSharp } from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from "@material-ui/icons/Edit";


import { Container, 
    Button, 
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";


import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

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

  
class Grupos extends Component {
  
    state = {  }
    titulo="GRUPOS"
    frnGrpClave= React.createRef();
    frnGrpCarrera = React.createRef();
    frnGrpActClave = React.createRef();
    frnGrpInsClave = React.createRef();
    frnActNombre = React.createRef();
    frnInsNombre = React.createRef();
    frnGrpAula= React.createRef();
    frnGrpLimite= React.createRef();
    frnGrpDateIni= React.createRef();
    frnGrpDateFin= React.createRef();
    

    constructor(props) {
        super(props);
        this.state = {
                    carrera: "Ingeniería Informática",
                    instructor: '',
                    actividad:'',
                    edit: false,
                    idGrupo:0,
                    idActividad:0,
                    idInstructor:0,
                    gruposA:[],
                    catalogoA:[],
                    instructoresA:[],
                    fechafin:'',
                    fechainicio:''
                };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInstructor = this.handleChangeInstructor.bind(this);
        this.handleChangeActividad = this.handleChangeActividad.bind(this);


      }
    
      handleChange(event) {
        this.setState({carrera: event.target.value});
      }

      handleChangeInstructor(event) {
       event.preventDefault();
       var newState = this.state;
       newState.instructor = event.target.value;
       this.setState(newState);
       for(var i = 0; i <this.state.instructoresA.length; i++)
       {
           if(this.state.instructoresA[i].insNombre===this.state.instructor)
           {   
            this.frnGrpInsClave.value=this.state.instructoresA[i].insClave;
           }
       }
       
      }

      handleChangeActividad(event) {
        event.preventDefault();
        var newState = this.state;
        newState.actividad = event.target.value;      
        this.setState(newState);
        //this.frnGrpActClave.value=this.state.catalogoA[]  
       for(var i = 0; i <this.state.catalogoA.length; i++)
        {
            if(this.state.catalogoA[i].actNombre===this.state.actividad)
            {   
                this.frnGrpActClave.value=this.state.catalogoA[i].actClave;
            }
        }

      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

      
      AddGrupo = event =>
    {
  
        const dataGrupo = {grpClave:this.frnGrpClave_Grpo.value,
                           grpCarrera : this.state.carrera,
                           actClave: this.frnGrpActClave.value,
                           insClave: this.frnGrpInsClave.value,
                           grpAula : this.frnGrpAula.value,
                           grpLimite: this.frnGrpLimite.value,
                           grpDateIni: this.frnGrpDateIni.value,
                           grpDateFin: this.frnGrpDateFin.value
                         }

        if(!this.state.edit)
        {
            const url = 'http://localhost:4000/api/grupos/';
            axios.post(url,dataGrupo).then (res=> console.log(res.data));           
        }
        else
        {
            const url='http://localhost:4000/api/grupos/'+this.state.id;
            axios.put(url,dataGrupo).then(res=> console.log(res.data));
           
        }

        this.frnGrpClave_Grpo.value="";
        this.frnGrpCarrera.value="";
       // this.frnGrpActClave.value="";
        this.frnActNombre.value="";
       // this.frnGrpInsClave.value="";
        this.frnInsNombre.value="";
        this.frnGrpAula.value="";
        this.frnGrpLimite.value="";
        this.frnGrpDateIni.value="2020";
        this.frnGrpDateFin.value="2020";

        this.frnGrpClave_Grpo.focus();
        this.frnGrpCarrera.focus();
        this.frnActNombre.focus();
        this.frnInsNombre.focus();
        this.frnGrpAula.focus();
        this.frnGrpLimite.focus();
        this.frnGrpDateIni.focus();
        this.frnGrpDateFin.focus();
        var newState = this.state;
        newState.edit = false;
        this.setState(newState);
        
        this.loadGruposinicio();
        this.loadGruposinicio();
        this.loadGruposinicio();

        //this.loadGrupos();
       // this.loadGrupos();
    }

    viewGrupo =(row)=>event=>
    {
        event.preventDefault();
        var newState = this.state;
       
        this.frnGrpClave_Grpo.value=this.state.gruposA[row].grpClave;
        this.frnGrpCarrera.value=this.state.gruposA[row].grpCarrera;
        this.frnGrpActClave.value=this.state.gruposA[row].actClave;
        for(var i = 0; i <this.state.catalogoA.length; i++)
        {
            if(this.state.catalogoA[i].actClave===this.state.gruposA[row].actClave)
            {   var newStateA =this.state;
                newStateA.actividad=this.state.catalogoA[i].actNombre;
                this.setState(newStateA);
            }
        }
        this.frnGrpInsClave.value=this.state.gruposA[row].insClave;
        for(var j = 0; j <this.state.instructoresA.length; j++)
        {    
            if(this.state.instructoresA[j].insClave===this.state.gruposA[row].insClave)
           {  
                var newStateB=this.state;
                newStateB.instructor=this.state.instructoresA[j].insNombre;
                this.setState(newStateB);
            }
        }
        this.frnGrpAula.value=this.state.gruposA[row].grpAula;
        this.frnGrpLimite.value=this.state.gruposA[row].grpLimite;
        this.frnGrpDateIni.value=this.state.gruposA[row].grpDateIni;
        this.frnGrpDateFin.value=this.state.gruposA[row].grpDateFin;

    

        this.frnGrpClave_Grpo.focus();
        this.frnGrpCarrera.focus();
       // this.frnGrpActClave.value="";
        this.frnActNombre.focus();
       // this.frnGrpInsClave.value="";
        this.frnInsNombre.focus();
        this.frnGrpAula.focus();
        this.frnGrpLimite.focus();
        this.frnGrpDateIni.focus();
        this.frnGrpDateFin.focus();
        newState.edit=false;
        this.setState(newState);
    }
    
    editGrupo = (id,row) => event =>
    {
        event.preventDefault();
        var newState = this.state;
        newState.edit = true;
        newState.id =id;
        this.setState(newState);

        this.frnGrpClave_Grpo.value=this.state.gruposA[row].grpClave;
        this.frnGrpCarrera.value=this.state.gruposA[row].grpCarrera;
        this.frnGrpActClave.value=this.state.gruposA[row].actClave;
       for(var i = 0; i <this.state.catalogoA.length; i++)
        {
            if(this.state.catalogoA[i].actClave===this.state.gruposA[row].actClave)
            {   var newStateA =this.state;
                newStateA.actividad=this.state.catalogoA[i].actNombre;
                this.setState(newStateA);
            }
        }
        this.frnGrpInsClave.value=this.state.gruposA[row].insClave;
        for(var j = 0; j <this.state.instructoresA.length; j++)
        {    
            if(this.state.instructoresA[j].insClave===this.state.gruposA[row].insClave)
           {  
                var newStateB=this.state;
                newStateB.instructor=this.state.instructoresA[j].insNombre;
                this.setState(newStateB);
            }
        }
        this.frnGrpAula.value=this.state.gruposA[row].grpAula;
        this.frnGrpLimite.value=this.state.gruposA[row].grpLimite;
        //alert("fecha "+this.state.gruposA[row].grpDateIni)

        this.frnGrpDateIni.value=this.state.gruposA[row].grpDateIni;
        this.frnGrpDateFin.value=this.state.gruposA[row].grpDateFin;

        

        this.frnGrpClave_Grpo.focus();
        this.frnGrpCarrera.focus();
       // this.frnGrpActClave.value="";
        this.frnActNombre.focus();
       // this.frnGrpInsClave.value="";
        this.frnInsNombre.focus();
        this.frnGrpAula.focus();
        this.frnGrpLimite.focus();
        this.frnGrpDateIni.focus();
        this.frnGrpDateFin.focus();
        this.frnGrpClave_Grpo.focus();
        var newState2 =this.state;
        newState2.carrera=this.state.gruposA[row].grpCarrera;
        this.setState(newState2);
        this.loadGrupos();
        this.loadGrupos();
        this.loadGrupos();
    }

    deleteGrupo =(id) => event =>
    { const url='http://localhost:4000/api/grupos/'+id;
        axios.delete(url).then(res => console.log(res.data));
        this.frnGrpClave_Grpo.value="";
        this.frnGrpCarrera.value="";
        this.frnGrpActClave.value="";
        this.frnActNombre.value="";
        this.frnGrpInsClave.value="";
        this.frnInsNombre.value="";
        this.frnGrpAula.value="";
        this.frnGrpLimite.value="";
        this.frnGrpDateIni.value="2020";
        this.frnGrpDateFin.value="2020";
        


        this.loadGruposinicio();
        this.loadGruposinicio();
        this.loadGruposinicio();
    }

    loadGrupos()
    {
        axios.get('http://localhost:4000/api/actividades')
        .then (res => {
          this.setState({catalogoA:res.data});
          //alert('primer elemento del actiivdades: '+this.state.catalogoA[0].actClave);
        /*  var newState = this.state;
          newState.actividad=this.state.catalogoA[0].actClave;
          this.setState(newState);
          this.frnGrpActClave.value =this.state.catalogoA[0].actClave;*/
         // this.setState(newState);
          //console.log(res.data);
        }) ;
        axios.get('http://localhost:4000/api/instructores')
        .then (res => {
          this.setState({instructoresA:res.data});
          /*var newState =  this.state;
          newState.instructor=this.state.instructoresA[0].insClave;
          this.setState(newState);
          this.frnGrpInsClave.value=this.state.instructoresA[0].insClave;*/
        //  this.setState(newState);
        }) ;

        axios.get('http://localhost:4000/api/grupos')
        .then (res => {
          this.setState({gruposA:res.data});
          //console.log(res.data);
        });

    }
    loadGruposinicio()
    {
        axios.get('http://localhost:4000/api/actividades')
        .then (res => {
          this.setState({catalogoA:res.data});
          //alert('primer elemento del actiivdades: '+this.state.catalogoA[0].actClave);
         var newState = this.state;
          newState.actividad=this.state.catalogoA[0].actClave;
          this.setState(newState);
          this.frnGrpActClave.value =this.state.catalogoA[0].actClave;
          this.setState(newState);
          //console.log(res.data);
        }) ;
        axios.get('http://localhost:4000/api/instructores')
        .then (res => {
          this.setState({instructoresA:res.data});
          var newState =  this.state;
          newState.instructor=this.state.instructoresA[0].insClave;
          this.setState(newState);
          this.frnGrpInsClave.value=this.state.instructoresA[0].insClave;
         this.setState(newState);
        }) ;

        axios.get('http://localhost:4000/api/grupos')
        .then (res => {
          this.setState({gruposA:res.data});
          //console.log(res.data);
        });

    }

   
    componentDidMount()
    {
        this.loadGruposinicio();
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
                <h4> GRUPOS </h4>
                <div className = "App-catalogo">
                <form autoComplete="off" onSubmit={this.AddGrupo}>
                <Button
                            variant="contained"
                            color="default"
                            size="small"
                            onClick = {this.AddGrupo}
                        >
                        Registro
                </Button> 
                &nbsp;&nbsp;
                <br></br>
 
                <TextField
                        id="TF1"
                        label = "Clave Grupo: "
                        type = "number"
                        margin= "normal"
                        variant="outlined"
                        focused = "on"
                        align = "left"
                        inputRef={e => (this.frnGrpClave_Grpo=e)}
                      
                    />   
                    &nbsp;&nbsp;
                <FormControl margin="1">
                    <InputLabel htmlFor="demo-customized-select-native">Carrera</InputLabel>
                        <NativeSelect
                        id="demo-customized-select-native"
                        value={this.state.carrera}
                        onChange={this.handleChange}
                        inputRef ={e=>(this.frnGrpCarrera=e)}
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
                <FormControl margin="1">
                    <InputLabel htmlFor="demo-customized" variant ="outlined">Clave Actividad</InputLabel>
                <TextField
                        disabled
                        id="TF1"
                        //label = "Clave Actividad: "
                        margin= "normal"
                        variant="outlined"
                        type = "number"
                        inputRef={e => (this.frnGrpActClave=e)}
                    />
                 </FormControl>
                &nbsp;&nbsp;
                <FormControl margin="1">
                    <InputLabel margin = "1" htmlFor="demo-customized-select-native">Actividad</InputLabel>
                        <NativeSelect                         
                        id="demo-customized-select-native"
                        value={this.state.actividad}
                        onChange={this.handleChangeActividad}
                        inputRef ={e=>(this.frnActNombre=e)}
                        input={<BootstrapInput />}>
                        {this.state.catalogoA.map((actividad,index)=>
                        (<option  value={actividad.actNombre}>{actividad.actNombre}</option>
                        ))}
                        </NativeSelect>
                </FormControl>
                <br></br>
              <FormControl margin ='1'  >
                <InputLabel htmlFor ="demo-cliente " variant ="outlined">Clave Instructor</InputLabel>       
                <TextField
                    id = "TF2"
                    disabled
                  // label = "Clave Instructor: "
                    type = "number"
                    margin= "normal"
                    variant="outlined"
                    inputRef={e => (this.frnGrpInsClave=e)}
                />
                  </FormControl>
                &nbsp;&nbsp;
               <FormControl margin = "1">
                   <InputLabel margin ="1" htmlFor="demo-custimezed">Instructor</InputLabel>
                   <NativeSelect
                    id="demo-customized-select-native2"
                    value ={this.state.instructor}
                    onChange= {this.handleChangeInstructor}
                    inputRef = {e=>(this.frnInsNombre=e)}
                    input={<BootstrapInput/>}>
                    {this.state.instructoresA.map((instructor,index)=>
                    (<option value={instructor.insNombre}>{instructor.insNombre}</option>
                    ))}
                   </NativeSelect>
               </FormControl>
                &nbsp;&nbsp;
                <TextField
                    label = "Aula: "
                    type = "text"
                    margin= "normal"
                    variant="outlined"
                    focused = "on"
                    inputRef={e => (this.frnGrpAula=e)}
                />
                 &nbsp;&nbsp;
                <TextField
                    label = "Limite del Grupo: "
                    type = "number"
                    InputLabelProps={{
                        shrink: true, }}
                    inputRef={e => (this.frnGrpLimite=e)}
                    margin= "normal"
                    variant="outlined"
                    focused = "on"
                   
                />
                <br></br>
                &nbsp;&nbsp;
                <TextField
                   id="date_inicio"
                   label="Fecha de inicio"
                   margin= "normal"
                   variant="outlined"
                   type="date"
                   defaultvalue="2017-05-24T10:30"
                   className="Date_text"
                   InputLabelProps={{
                   shrink: true,
                   }}
                    focused = "on"
                    inputRef={e => (this.frnGrpDateIni=e)}
                    
                />
                &nbsp;&nbsp;
                <TextField
                    id="date_fin"
                    label="Fecha de Fin"
                    margin= "normal"
                    variant="outlined"
                    type="date"
                    defaultvalue="2017-05-24T10:30"
                    className="Date_text"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    focused =  "on"
                    inputRef={e => (this.frnGrpDateFin=e)}
                    
                />
                

                </form>
                <List
                    component="nav"
                    subheader= {<ListSubheader component="div">{this.titulo}</ListSubheader>}
                    >
                    { this.state.gruposA.map((grupo,index) => (
                        <ListItem button key ={index}>
                            <ListItemIcon onClick ={this.viewGrupo(index)}>
                            <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText inset primary={grupo.grpClave} />
                            <ListItemText inset primary={grupo.grpCarrera} />
                            <ListItemText inset primary={grupo.actClave} />
                            <ListItemText inset primary={grupo.insClave} />
                            <ListItemText inset primary={grupo.grpAula} />
                            <ListItemText inset primary={grupo.grpLimite} />
                            <ListItemText inset primary={grupo.grpDateIni} />
                            <ListItemText inset primary={grupo.grpDateFin} />
                            <ListItemIcon onClick = {this.editGrupo(grupo.id,index)}>
                            <EditIcon/>
                            </ListItemIcon>
                            <ListItemIcon onClick = {this.deleteGrupo(grupo.id)}>
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
export default Grupos;