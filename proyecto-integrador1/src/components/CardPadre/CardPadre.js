import React from "react";
import CardHijo from "../CardHijo/CardHijo";
import CardHijoA from "../CardHijo/CardHijoA";
import CardHijoB from "../CardHijo/CardHijoB";

function CardPadre (props) {
    return (
    <>
       
        {props.songs ?
            props.info.map(elm => <CardHijo data={elm}/>)
        :
            props.info.map(elm => <CardHijoA data = {elm}/> )
        }

        {props.esBusqueda ?
            props.info.map(elm => <CardHijoB data = {elm} /> )
            
            :
            
            ''
        }
       
    </>
    
    );
}

export default CardPadre;