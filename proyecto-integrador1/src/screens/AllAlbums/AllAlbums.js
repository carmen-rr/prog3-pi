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
            index : 0,
            limit: 10,

        }
    }

    componentDidMount(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=${this.state.index}&limit=${this.state.limit}`)
    .then(resp => resp.json())
    .then(data =>{ this.setState({
        topAlbums:data.data,
        readyAlbums: true,
        backup: data.data, 
        index: this.state.index+this.state.limit

    })
    console.log("DATAALBUMS",data.data)}) 
    .catch(err => console.log(err))
}

cargarMas(){
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=${this.state.index}&limit=${this.state.limit}`)
    .then(resp => resp.json())
        .then (data=> this.setState({
            topAlbums: this.state.topAlbums.concat(data.data), //adentro del concat guardo el array de resultados nuevo 
            index: this.state.index+this.state.limit
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