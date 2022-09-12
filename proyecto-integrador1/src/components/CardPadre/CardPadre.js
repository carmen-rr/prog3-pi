import React from "react";
import CardHijo from "../CardHijo/CardHijo";
import CardHijoA from "../CardHijo/CardHijoA";
import CardHijoB from "../CardHijo/CardHijoB";

function CardPadre (props) {
    return (
    <>
       
        {props.songs ?
            props.info.map((elm, idx) => <CardHijo data={elm} key={elm.id.toString() + idx.toString()}/>)
        :
            props.info.map((elm,idx) => <CardHijoA data ={elm} key={elm.id.toString() + idx.toString()}/> )
        }

        {props.esBusqueda ?
            props.info.map((elm,idx) => <CardHijoB data ={elm} key={elm.id.toString() + idx.toString()}/> )
            
            :
            
            ''
        }
       
    </>
    
    );
}

export default CardPadre;