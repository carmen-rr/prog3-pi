import React , {Component}from 'react'
import CardPadre from "../../components/CardPadre/CardPadre"



class Favorites extends Component {
    constructor(props){
        super(props)
        this.state = {
            myTracks:[], //array de objetos literales con cada personaje 
            readySong:false,
            readyAlbums: false,
            



        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('tracksFavoritos')
        if(storage !== null){ //storage distinto de null
            let parsedStorage = JSON.parse(storage) //[1,2,3]

            Promise.all( //recopilamos promesas del map
                parsedStorage.map(id => {
                    return(
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)//1 //2 //3
                        .then(resp => resp.json())
                    )
                })
            )
            .then(data => this.setState({
                myTracks:data, //reemplazo array 
                readySong: true
            }, ()=> {
                console.log('Esta es mi data')
                console.log(this.state.mytracksData)
            }))
            .catch(err => console.log(err))
        }

            let storageA = localStorage.getItem('albumsFavoritos')
            if(storageA !== null){ //storage distinto de null
                let parsedStorageA = JSON.parse(storageA) //[1,2,3]
    
                Promise.all( //recopilamos promesas del map
                parsedStorageA.map(id => {
                        return(
                            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)//1 //2 //3
                            .then(resp => resp.json())
                        )
                    })
                )
                .then(data => this.setState({
                    myAlbums:data, //reemplazo array 
                    readyAlbums: true
                }, ()=> {
                    console.log('Esta es mi data de album')
                    console.log(this.state.myalbumsData)
                }))
                .catch(err => console.log(err))
            }
        

        
    }



render(){
    return (
        <React.Fragment>
        <h1>Tus Tracks favoritos</h1>

        { 
            this.state.readySong ? //if ternario this.state.readysong es false
            //con true entra aca
            //map aca de cardpadre
                <>
                <CardPadre info = {this.state.myTracks} songs = {this.state.readySong}/>
                </> : 
            'Cargando...'//con false entra aca
            }

<h1>Tus Albums favoritos</h1>

            { 
            this.state.readyAlbums ? 
                <>
                <CardPadre info = {this.state.myAlbums} albums = {this.state.readyAlbums}/>
                </> : 
            'Cargando...'
            }
            
        </React.Fragment>
    )
}
}
export default Favorites; 