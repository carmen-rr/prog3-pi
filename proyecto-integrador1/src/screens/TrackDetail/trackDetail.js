import React, {Component} from 'react'

class TrackDetail extends Component{
    constructor(props){
        super (props)
        this.state={
            id: props.match.params.id, 
            character: {}

        }
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            character: data
        }) )
        .catch(err => console.log(err))
    }


    render (){

        return (
                <img src={this.state.character.image}/>
        )

    }
} 

export default TrackDetail