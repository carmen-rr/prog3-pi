import React , {Component}from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"
import Formulario from '../../components/Formulario/Formulario'
import Buscador from '../../components/Formulario/Buscador'
import './home.css'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            topCanciones:[],
            topCancionesBackUp: [] ,
            topAlbums: [],
            readySong:false,
            readyAlbums: false,
            datas: [],
            valorBuscado: [],
            sinResultados:false
        }

    }

    componentDidMount(){
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=12&limit=6")
        .then(resp => resp.json())
        .then(data =>{ this.setState({
            topCanciones: data.data,
            topCancionesBackUp: data.data,
            readySong: true
        })
        console.log("DATA",data.data)})
        .catch(err => console.log(err))
    
        
        fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=1&limit=6")
        .then(resp => resp.json())
        .then(data =>{ this.setState({
            topAlbums: data.data,
            readyAlbums: true
        })
        console.log("DATAALBUMS",data.data)}) 
        .catch(err => console.log(err))
    
    }

    filtrarPersonajes(nombre){
        console.log(nombre)
        console.log(this.state.topCanciones)
        let arrayFiltrado = this.state.topCancionesBackUp.filter(data => data.title.toLowerCase().includes(nombre.toLowerCase()))
        this.setState({
            topCanciones: arrayFiltrado
        })
    }

    metodoQueBusca(valor){
        if(valor.length > 0){
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${valor}`)
            .then(resp => resp.json())
            .then(data =>{ 
                if(data.data.length > 0){
                this.setState({
                    valorBuscado : data.data,
                    sinResultados:false
                })    
                } else {
                    this.setState({
                        valorBuscado:[],
                        sinResultados:true
                    })
                }
            })
            .catch(err => this.setState({
                sinResultados:true
            }, ()=> console.log('pasa por aqui')))
        } else {
            this.setState({valorBuscado: []})
        }
    }

    render() {     
        return (
        
            <>
            <div className='buscadores'>
            <Formulario metodoQueFiltra = {(nombre)=>this.filtrarPersonajes(nombre)}/> 
            <Buscador metodoQueBusca ={(valor)=> this.metodoQueBusca(valor)}/>
            </div>
            <h1>TOP TRACKS 🎶​ </h1> 
            <div className='todo-container'>
            {
                this.state.sinResultados ?
                <h1>No encontramos lo que buscas</h1>
                :
                this.state.valorBuscado.length > 0
                ?
                <CardPadre esBusqueda={true} info={this.state.valorBuscado}/>
                : ''
            }
            
            { 
            this.state.readySong ? //if ternario
                <>
                <CardPadre info = {this.state.topCanciones} songs = {true}/>
                </> : 
            'Loading...'
            }
            </div>

            
            
            <div className='botoncito'>
                <Link to= "/allTracks">
                    <button className='viewAllButton'>MORE TRACKS</button>
                </Link>
            </div>

            
            <h1> TOP ALBUMS 🎶 </h1>
            
            <div className='todo-container'>
           { 
            this.state.readyAlbums ? //if ternario
                <>
                <CardPadre info = {this.state.topAlbums}/>
                </> : 
            'Loading...'
            }
            </div>
        
            <div className='botoncito'>
                <Link to= "/allAlbums">
                    <button className='viewAllButton'>MORE ALBUMS</button>
                </Link>
            </div>
        </>
      )
    }
  }

export default Home
