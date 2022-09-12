import React from "react";
import CardHijo from "../CardHijo/CardHijo";
import CardHijoA from "../CardHijo/CardHijoA";

function CardPadre (props) {
    console.log(props.info)
    return (
    <>
       
        {props.songs ?
            props.info.map(elm => <CardHijo data={elm}/>)
        :
            props.info.map(elm => <CardHijoA data = {elm}/> )
        }
       
    </>
    
    );
}

export default CardPadre;