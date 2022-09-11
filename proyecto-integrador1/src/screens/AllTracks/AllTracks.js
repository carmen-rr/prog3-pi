import React , {Component}from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"


class AllTracks extends Component {
    constructor(props){
        super(props)
        this.state = {
            topCanciones:[],
            ready:false,
            pagina : '?index=18&limit=5',
            backup: [],
            cards:[],
        }
    }
    
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks${this.state.pagina}`)
        .then(resp => resp.json())
        .then(data =>{ this.setState({
            topCanciones:data.data,
            ready: true,
            backup: data.data, 
            pagina: this.state.pagina +1

        })
        console.log("DATA",data.data)}) 
        .catch(err => console.log(err))
    }

    cargarMas(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks${this.state.pagina+1}`)
        .then(resp => resp.json())
        .then (data=> this.setState({
            topCanciones: this.state.topCanciones.concat(data.data), //adentro del concat guardo el array de resultados nuevo 
            pagina: this.state.pagina + 1
        }))
        .catch(err => console.log(err))
        }

        backup(){
            this.setState({
              topCanciones: this.state.backup
            })
          }

        componentDidUpdate(){
            console.log('Soy el update')
          }

          componentWillUnmount(){
            console.log('Soy el Unmount')
          }

    render() {     
        return (
        
            <>
            <h1>ALL TRACKS​ </h1> 
            { 
            this.state.ready ? //if ternario
                <>
                <CardPadre info = {this.state.topCanciones} songs = {true}/>
                </> : 
            'Cargando...'
            }
            
            <button onClick={()=> this.cargarMas()}>Cargar Más</button>
            <button onClick={()=> this.backup()}>Backup</button>

        </>
      )
    }
  }

export default AllTracks;