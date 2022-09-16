import React , {Component}from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"


class AllTracks extends Component {
    constructor(props){
        super(props)
        this.state = {
            topCanciones:[],
            ready:false,
            index : 18,
            limit: 5,
            backup: [],
            cards:[],
        }
    }
    
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=${this.state.index}&limit=${this.state.limit}`)
        .then(resp => resp.json())
        .then(data =>{ this.setState({
            topCanciones:data.data,
            ready: true,
            backup: data.data, 
            index: this.state.index+this.state.limit
        })
        console.log("DATA",data.data)}) 
        .catch(err => console.log(err))
    }

    cargarMas(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=${this.state.index}&limit=${this.state.limit}`)
        .then(resp => resp.json())
        .then (data=> this.setState({
            topCanciones: this.state.topCanciones.concat(data.data), //adentro del concat guardo el array de resultados nuevo 
            index: this.state.index+this.state.limit
        }))
        .catch(err => console.log(err))
        }

        backup(){
            this.setState({
              topCanciones: this.state.backup
            })
          }


    render() {     
        return (
        
            <React.Fragment>
            <h1>ALL TRACKS​ </h1> 
            { 
            this.state.ready ? //if ternario
                <>
                <CardPadre info = {this.state.topCanciones} songs = {true}/>
                </> : 
            'Loading...'
            }
            
            <button onClick={()=> this.cargarMas()}>More tracks</button>
            <button onClick={()=> this.backup()}>Less tracks</button>

        </React.Fragment>
      )
    }
  }

export default AllTracks;