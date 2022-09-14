import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"
import './albumDetail.css';

class AlbumDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            topAlbums: [],
            readyAlbums: true,


        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    topAlbums: data,
                    readyAlbums: false,

                })
            })
            .catch(err => console.log(err))

    }


    render() {
        console.log(this.state.topAlbums.artist);
        return (
            <>

                {this.state.readyAlbums ?
                    <p>Cargando</p>
                    :
                    <>

                        
                        
                        
                        


                        <main className="main-detail-album">

                            <article className="justice-title">
                                <h1>{this.state.topAlbums.title}</h1>
                            </article>

                            <article className="article-main-album">
                                <section class="section1-album">
                                    <ul>
                                        <img className="fotoalbum" src={this.state.topAlbums.cover_big} alt="Album" />
                                        <h6>{this.state.topAlbums.release_date}</h6>

                                        
                                        {this.state.topAlbums.genres.data.map((genres) =>{
                                            return <h3 className="genres-album">{genres.name}</h3>
                                        })}
                                        
                                    
                                    </ul>
                                </section>

                                <section className="section2-album">
                                    <h3 className="detalles-album">{this.state.topAlbums.artist.name}</h3>
                                    
                                    <ul className="songs-album">

                                        {this.state.topAlbums.tracks.data.map((track) =>{
                                            return  <li><Link to={`/trackDetail/${track.id}`}>{track.title}</Link></li>
                                        })}

                                    </ul>

                                </section>

                            </article>

                        </main>

                    </>


                }
            </>
        )

    }
}

export default AlbumDetail