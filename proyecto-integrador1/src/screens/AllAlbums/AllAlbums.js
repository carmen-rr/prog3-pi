import React , {Component}from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"

class AllAlbums extends Component {
    constructor(props){
        super(props)
        this.state = {
            topAlbums:[],
            readyAlbums:false,
            backup: [],
            prueba:'', 
            pagina: 0,

        }
    }

    componentDidMount(){
    fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums")
    .then(resp => resp.json())
    .then(data =>{ this.setState({
        topAlbums:data.data,
        readyAlbums: true,
        backup: data.data, 
        pagina: this.state.pagina +1


    })
    console.log("DATAALBUMS",data.data)}) 
    .catch(err => console.log(err))
}

cargarMas(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?page=${this.state.pagina + 1}`)
        .then(resp => resp.json())
        .then (data=> this.setState({
            topAlbums: this.state.topAlbums.concat(data.data), //adentro del concat guardo el array de resultados nuevo 
            pagina: this.state.pagina + 1
        }))
        .catch(err => console.log(err))
        }

        backup(){
            this.setState({
                topAlbums: this.state.backup
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
                <h1> TOP ALBUMS 🎶 </h1>
            
                { 
                 this.state.readyAlbums ? //if ternario
                     <>
                <CardPadre info = {this.state.topAlbums}/>
                     </> : 
                 'Cargando...'
                 }

                 <button onClick={()=> this.cargarMas()}>Cargar Más</button>
                 <button onClick={()=> this.backup()}>Backup</button>
               
                 </>
                 )
               }
             }

export default AllAlbums;