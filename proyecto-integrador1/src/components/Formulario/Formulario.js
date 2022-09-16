import React, { Component } from "react"

class Formulario extends Component{
    
    constructor(props){
        super(props);
        this.state = {valor: '' };
    }
    
    //Con este metodo desactivamos el comportamiento default del FORM
    evitarSubmit(event) {
        event.preventDefault();
    }

    //Con este metodo gestionamos el valor que hay en el INPUT
    guardarValor(event) {
        this.setState(
            {valor: event.target.value},
            
            ()=> this.props.metodoQueFiltra(this.state.valor) //acá le tengo que pegar a la api de search?
            
        )   
    }
    
        
    render(){
        return(
            <form onSubmit={(event)=>this.evitarSubmit(event)} className = "formulario">
                <input type="text" onChange={(event)=>this.guardarValor(event)} value={this.state.valor} placeholder = '¿Qué estas buscando?'/>
            </form>
        )
    }
}

export default Formulario 