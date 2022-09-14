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
                                                         
                        <main className="main-detail-track">
                        <article className="track-detail">
                            <img src={this.state.topTracks.album.cover_big} alt="logo chico" class="img-dua"/>
                                <section className="description-track">
                                    <div className="title-track info-track">
                                        <p className="add-playlist">Agregar a favoritos</p>                                    
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