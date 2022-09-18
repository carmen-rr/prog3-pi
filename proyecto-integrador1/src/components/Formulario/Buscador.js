import React, { Component } from "react";
import "./Formulario.css";

class Buscador extends Component {
    constructor(props) {
    super(props);
    this.state = {valor: ''};
    }

    evitarSubmit(event) {
        event.preventDefault();
    }
    
    controlarCambios(event) {
        this.setState({valor: event.target.value}, ()=> this.props.metodoQueBusca(this.state.valor));
    }

    render() {
        return (
        
        <form onSubmit={(event)=>this.evitarSubmit(event)}>
        <input className="search" type="text" placeholder="Buscar..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
        <input className="boton" type="submit" value="Buscar" />
        </form>
        
        
        );
        }
       }
       
    export default Buscador