import React , {Component}from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"
import Formulario from '../../components/Formulario/Formulario'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            topCanciones:[],
            topAlbums: [],
            readySong:false,
            readyAlbums: false
        }

    }

    componentDidMount(){
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=12&limit=5")
        .then(resp => resp.json())
        .then(data =>{ this.setState({
            topCanciones: data.data,
            readySong: true
        })
        console.log("DATA",data.data)}) //preg a Eve
        .catch(err => console.log(err))
    
        
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums")
        .then(resp => resp.json())
        .then(data =>{ this.setState({
            topAlbums: data.data,
            readyAlbums: true
        })
        console.log("DATAALBUMS",data.data)}) 
        .catch(err => console.log(err))
    
    }

    render() {     
        return (
        
            <>
            <h1>TOP CANCIONES 🎶​ </h1> 
            <Formulario metodoQueBusca = {(nombre)=>this.filtrarPersonajes(nombre)}/>
            { 
            this.state.readySong ? //if ternario
                <>
                <CardPadre info = {this.state.topCanciones} songs = {true}/>
                </> : 
            'Cargando...'
            }
            
            <div>
                <Link to= "/allTracks">
                    <button className='viewAllButton'>MORE TRACKS</button>
                </Link>
            </div>

            
            <h1> TOP ALBUMS 🎶 </h1>
            
           { 
            this.state.readyAlbums ? //if ternario
                <>
                <CardPadre info = {this.state.topAlbums}/>
                </> : 
            'Cargando...'
            }
           
        
            <div>
                <Link to= "/allAlbums">
                    <button className='viewAllButton'>MORE ALBUMS</button>
                </Link>
            </div>
        </>
      )
    }
  }

export default Home
