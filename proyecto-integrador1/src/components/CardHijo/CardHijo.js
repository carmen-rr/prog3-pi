import React,{Component} from 'react'
import './CardHijo.css'
import { Link } from 'react-router-dom'


 class CardHijo extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas'
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

        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null){
            
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        favoritos.push(id);
        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos',favoritosToString);
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
                    
                    <p onClick={()=> this.agregarYQuitarDeFavoritos(this.props.data.data.id)}>AGREGAR A FAVORITOS</p>
                    
                    
                    
                    {/*<button onClick={() => this.props.borrar(this.props.info.name)}>BORRAR</button>*/}
                   
                        <Link to= {`/trackDetail/${this.props.data.id}`}>
                            <button className='viewAllButton'>detalle</button>
                        </Link>
                    
                </div>
        )
    }
}

export default CardHijo