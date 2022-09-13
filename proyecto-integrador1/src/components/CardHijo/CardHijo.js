import React,{Component} from 'react'
import './CardHijo.css'
import { Link } from 'react-router-dom'



 class CardHijo extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas',
            messageFav : 'Agregar track a Favoritos' //este string va a ir cambiando
        }
    }

    componentDidMount(){ //lo usamos para que el quitar favoritos si ya esta en el storage el objeto siga
        let tracksFavoritos = [];
        let recuperoStorage = localStorage.getItem('tracksFavoritos')

        if (recuperoStorage !== null){ //si hay datos en el storage (algo diferente de null, ya se cargaron datos en el storage)
            let favoritosToArray = JSON.parse(recuperoStorage); //si hay datos los parseo transformandolos en array 
            tracksFavoritos = favoritosToArray //y esos datos los guardo en favoritos
        }

        if (tracksFavoritos.includes (this.props.data.id)){
            this.setState({
                messageFav : 'Quitar album de Favoritos'
            })
        }
    }

    changeShowMore(){
        if(this.state.showMore){
            console.log(this.state.showMore)
            this.setState({
                showMore: false,
                textoBoton: 'Ver más'
            })
        } else {
            console.log(this.state.showMore)
            this.setState({
                showMore: true,
                textoBoton: 'Ver menos'
            })
        }    
    }

    agregarYQuitarDeFavoritos(id){
        //Tiene que agregar un id dentro de un array y guardarlo en localStorage
        //Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos

        let tracksFavoritos = [];
        let recuperoStorage = localStorage.getItem('tracksFavoritos')

        if (recuperoStorage !== null){ //si hay datos en el storage (algo diferente de null, ya se cargaron datos en el storage)
            let favoritosToArray = JSON.parse(recuperoStorage); //si hay datos los parseo transformandolos en array 
            tracksFavoritos = favoritosToArray //y esos datos los guardo en favoritos
        }

        //preguntando si el id ya esta en el array 
        if (tracksFavoritos.includes(id)){ //includes retorna un booleano 
            tracksFavoritos = tracksFavoritos.filter(unId=> unId !== id) // aplicando el metodo filter al array de favoritos para comparar elementos y decida y lo guardo en la misma variable 
                //mostrar al usuario agregar a favoritos
            this.setState({
                messageFav:'Agregar album a Favoritos'
            })
        } else {
            tracksFavoritos.push(id)//agregamos id al array (el dato se agrega con el metodo push)
            //mostrar al usuario quitar de favoritos
            this.setState({
                messageFav:'Quitar album de Favoritos'
            })
        }


        let favoritosToString = JSON.stringify(tracksFavoritos); //transformamos al array en cadena de texto 
        localStorage.setItem('tracksFavoritos',favoritosToString); //le decimos donde queremos guardarlo y que le vamos a guardar 

        console.log(localStorage) //se ve por consola lo que pasa cuando toco agregar a favoritos
    }
    
    

    render() {
        return (
                <div className='card-hijo'>
                    <img
                        src={this.props.data.album.cover}
                        alt={`Una imagen de ${this.props.data.album.title}`}
                    />
                    <h3>{this.props.data.album.title}</h3>
                    <h4>{this.props.data.artist.name}</h4>
                    
                    <p>No te pierdas lo nuevo de </p> 
                    {
                    this.state.showMore ? <p>{this.props.data.artist.name}</p> : ''
                    }
                    
                    <button onClick={
                        ()=> this.changeShowMore()
                    }>{this.state.textoBoton}</button>
                    
                    <p onClick={()=> this.agregarYQuitarDeFavoritos(this.props.data.id)}>{this.state.messageFav}</p>
                    
                    
                    
                    {/*<button onClick={() => this.props.borrar(this.props.info.name)}>BORRAR</button>*/}
                   
                        <Link to= {`/trackDetail/${this.props.data.id}`}>
                            <button className='viewAllButton'>detalle</button>
                        </Link>
                    
                </div>
        )
    }
}

export default CardHijo