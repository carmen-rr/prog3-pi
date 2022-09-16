import React , {Component}from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"
import './trackDetail.css';

class TrackDetail extends Component{
    constructor(props){
        super (props)
        this.state={
            id : props.match.params.id,
            topTracks:[],
            readyAlbums:true,

            messageFav : 'Add to my favorite tracks' //este string va a ir cambiando



        }
    }

    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
            topTracks:data,
            readyAlbums: false,
    
        }) })
        .catch(err => console.log(err))
        

        let tracksFavoritos = [];
        let recuperoStorage = localStorage.getItem('tracksFavoritos')

        if (recuperoStorage !== null){ //si hay datos en el storage (algo diferente de null, ya se cargaron datos en el storage)
            let favoritosToArray = JSON.parse(recuperoStorage); //si hay datos los parseo transformandolos en array 
            tracksFavoritos = favoritosToArray //y esos datos los guardo en favoritos
        }

        if (tracksFavoritos.includes (this.state.id)){
            this.setState({
                messageFav : 'Remove track from favorites'
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
                messageFav:'Add to my favorite tracks'
            })
        } else {
            tracksFavoritos.push(id)//agregamos id al array (el dato se agrega con el metodo push)
            //mostrar al usuario quitar de favoritos
            this.setState({
                messageFav:'Remove from my favorite tracks'
            })
        }


        let favoritosToString = JSON.stringify(tracksFavoritos); //transformamos al array en cadena de texto 
        localStorage.setItem('tracksFavoritos',favoritosToString); //le decimos donde queremos guardarlo y que le vamos a guardar 

        console.log(localStorage) //se ve por consola lo que pasa cuando toco agregar a favoritos
    }

    render() {
        return (
            <>

                {this.state.readyAlbums ?
                <p>Loading...</p>
                :
                    <>
                                                         
                        <main className="main-detail-track">
                        <article className="track-detail">
                            <img src={this.state.topTracks.album.cover_big} alt="logo chico" class="img-dua"/>
                                <section className="description-track">
                                    <div className="title-track info-track">
                                        <p className="add-playlist" onClick={()=> this.agregarYQuitarDeFavoritos(this.state.topTracks.id)}>{this.state.messageFav}</p>
                             
                                        <h1>{this.state.topTracks.title}</h1>

                                        <Link to={`/albumDetail/${this.state.topTracks.album.id}`}>
                                        <p class="album-detail-track">{this.state.topTracks.album.title}</p>
                                        </Link>
                                        <h3>{this.state.topTracks.artist.name}</h3>
                                    </div>
                                     <iframe title="deezer-widget" src={`https://widget.deezer.com/widget/dark/track/${this.state.topTracks.id}`} width="200%" height="125" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                                </section>
                        </article>
                        </main>

                                
                                


                    </>
                   

                }
            </>
        )

    }
} 

export default TrackDetail