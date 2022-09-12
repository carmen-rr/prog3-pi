import React,{Component} from 'react'

class CardHijoB extends Component {
    constructor(props){
        super(props)
    }
  render() {
    console.log(this.props)
    return (
      <div>{this.props.data.name}</div>
    )
  }
}


export default CardHijoB
