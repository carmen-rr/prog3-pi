import React , {Component}from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"

class Favorites extends Component {
    constructor(props){
        super(props)
        this.state = {
            myTracks:[], //array de objetos literales con cada personaje 
            readySong:false,
            readyAlbums: false,
        }
    }

componentDidMount(){ //lo usamos para que el quitar favoritos si ya esta en el storage el objeto siga
    let tracksFavoritos = [];
    let recuperoStorage = localStorage.getItem('tracksFavoritos')

    if (recuperoStorage !== null){ //si hay datos en el storage (algo diferente de null, ya se cargaron datos en el storage)
        tracksFavoritos = JSON.parse(recuperoStorage); //un array de ids
       
        //recorriendo el array y pidiendole los datos de cada personaje 

        let topCanciones = []

        tracksFavoritos.map((id) => {


            //pedir por cada id los datos del favorito
            let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`
            fetch(url)
            .then(res => res.json())
            .then(data => topCanciones.push(data))
            .catch(err => console.log(err))
        
        })
    console.log(topCanciones)
}
}

render(){
    return (
        <React.Fragment>
        <div>Tus favoritos</div>
        { 
            this.state.ready ? //if ternario
                <>
                <CardPadre info = {this.state.topCanciones} songs = {true}/>
                </> : 
            'Cargando...'
            }
            
        </React.Fragment>
    )
}
}
export default Favorites; 