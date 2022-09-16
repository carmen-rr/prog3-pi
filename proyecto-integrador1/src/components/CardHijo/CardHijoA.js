import React,{Component} from 'react'
import './CardHijo.css'
import { Link } from 'react-router-dom'

 class CardHijoA extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'More info', 
            messageFav : 'Add to my favorite albums' //este string va a ir cambiando

        }
    }


    componentDidMount(){ //lo usamos para que el quitar favoritos si ya esta en el storage el objeto siga
        let albumsFavoritos = [];
        let recuperoStorage = localStorage.getItem('albumsFavoritos')

        if (recuperoStorage !== null){ //si hay datos en el storage (algo diferente de null, ya se cargaron datos en el storage)
            let favoritosToArray = JSON.parse(recuperoStorage); //si hay datos los parseo transformandolos en array 
            albumsFavoritos = favoritosToArray //y esos datos los guardo en favoritos
        }

        if (albumsFavoritos.includes (this.props.data.id)){
            this.setState({
                messageFav : 'Add to my favorite albums'
            })
        }
    }

    changeShowMore(){
        if(this.state.showMore){
            console.log(this.state.showMore)
            this.setState({
                showMore: false,
                textoBoton: 'More info'
            })
        } else {
            console.log(this.state.showMore)
            this.setState({
                showMore: true,
                textoBoton: 'Less info'
            })
        }
    }

    agregarYQuitarDeFavoritos(id){
        //Tiene que agregar un id dentro de un array y guardarlo en localStorage
        //Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos

        let albumsFavoritos = [];
        let recuperoStorage = localStorage.getItem('albumsFavoritos')

        if (recuperoStorage !== null){ //si hay datos en el storage (algo diferente de null, ya se cargaron datos en el storage)
            let favoritosToArray = JSON.parse(recuperoStorage); //si hay datos los parseo transformandolos en array 
            albumsFavoritos = favoritosToArray //y esos datos los guardo en favoritos
        }

        //preguntando si el id ya esta en el array 
        if (albumsFavoritos.includes(id)){ //includes retorna un booleano 
            albumsFavoritos = albumsFavoritos.filter(unId=> unId !== id) // aplicando el metodo filter al array de favoritos para comparar elementos y decida y lo guardo en la misma variable 
                //mostrar al usuario agregar a favoritos
            this.setState({
                messageFav:'Add to my favorite albums'
            })
        } else {
            albumsFavoritos.push(id)//agregamos id al array (el dato se agrega con el metodo push)
            //mostrar al usuario quitar de favoritos
            this.setState({
                messageFav:'Remove from my favorite albums'
            })
        }


        let favoritosToString = JSON.stringify(albumsFavoritos); //transformamos al array en cadena de texto 
        localStorage.setItem('albumsFavoritos',favoritosToString); //le decimos donde queremos guardarlo y que le vamos a guardar 

        console.log(localStorage) //se ve por consola lo que pasa cuando toco agregar a favoritos
    }
    

    render() {
        return (
                <div className='card-hijo'>
                    <img
                        src={this.props.data.cover}
                        alt={`Una imagen de ${this.props.data.title}`}
                    />
                    <h3>{this.props.data.title}</h3>
                    <h4>{this.props.data.artist.name}</h4>
                    
                    <p>Don't miss out the latest from</p> 
                    {
                    this.state.showMore ? <p>{this.props.data.artist.name}</p> : ''
                    }
                    
                    <button onClick={
                        ()=> this.changeShowMore()
                    }>{this.state.textoBoton}</button>

                    <p onClick={()=> this.agregarYQuitarDeFavoritos(this.props.data.id)}>{this.state.messageFav}</p>

                    {/*<button onClick={() => this.props.borrar(this.props.info.name)}>BORRAR</button>*/}

                    <Link to= {`/albumDetail/${this.props.data.id}`}>
                            <button className='buttonHome'>Details</button>
                        </Link>
                </div>
                 

        )
    }
}

export default CardHijoA