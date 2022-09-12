import React,{Component} from 'react'
import './CardHijo.css'
import { Link } from 'react-router-dom'



 class CardHijoA extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas'
        }
    }

    changeShowMore(){
        if(this.state.showMore){
            console.log(this.state.showMore)
            this.setState({
                showMore: false,
                textoBoton: 'Ver más'
            })
        } else {
            console.log(this.state.showMore)
            this.setState({
                showMore: true,
                textoBoton: 'Ver menos'
            })
        }
    }

    render() {
        return (
                <div className='card-hijo'>
                    <img
                        src={this.props.data.cover}
                        alt={`Una imagen de ${this.props.data.title}`}
                    />
                    <h3>{this.props.data.title}</h3>
                    <h4>{this.props.data.artist.name}</h4>
                    
                    <p>No te pierdas lo nuevo de </p> 
                    {
                    this.state.showMore ? <p>{this.props.data.artist.name}</p> : ''
                    }
                    
                    <button onClick={
                        ()=> this.changeShowMore()
                    }>{this.state.textoBoton}</button>

                    <button onClick={() => this.props.borrar(this.props.info.name)}>BORRAR</button>

                    <Link to= {`/albumDetail/${this.props.data.id}`}>
                            <button className='viewAllButton'>detalle</button>
                        </Link>
                </div>
                 

        )
    }
}

export default CardHijoA