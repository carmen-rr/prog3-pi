import React, { Component } from "react"

class Formulario extends Component{
    
    constructor(props){
        super(props);
        this.state = {valor: '' };
    }
    
    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({valor: event.target.value});
    console.log(this.state.valor)
    }
    
       
    
    render(){
        return(
            <form onSubmit={(event)=>this.evitarSubmit(event)} className = "formulario">
                <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder = '¿Qué estas buscando?'/>
            </form>
        )
    }
}

export default Formulario 