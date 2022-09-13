import React , {Component}from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"

class TrackDetail extends Component{
    constructor(props){
        super (props)
        this.state={
            id : props.match.params.id,
            topTracks:[],
            readyAlbums:true,


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
        
    }


    render() {
        return (
            <>

                {this.state.readyAlbums ?
                <p>Cargando</p>
                :
                    <>

                    <img src={this.state.topTracks.album.cover}/>
                    <p>{this.state.topTracks.title}</p>
                    <p>{this.state.topTracks.artist.name}</p>
                    <p>{this.state.topTracks.album.title}</p>
                    <iframe title="deezer-widget" src={`https://widget.deezer.com/widget/dark/track/${this.state.topTracks.id}`} width="1050" height="125" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>                  
                    

                    </>
                   

                }
            </>
        )

    }
} 

export default TrackDetail