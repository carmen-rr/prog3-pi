import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardPadre from "../../components/CardPadre/CardPadre"

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
                        <img src={this.state.topAlbums.cover} />
                        <p>{this.state.topAlbums.title}</p>
                        <p>{this.state.topAlbums.artist.name}</p>
                        <p>{this.state.topAlbums.generes}</p>
                        <p>{this.state.topAlbums.release_date}</p>

                        {this.state.topAlbums.tracks.map((opcion, idx) =><li> {this.state.topAlbums.tracks}</li>)}

                    </>
                   

                }
            </>
        )

    }
}

export default AlbumDetail