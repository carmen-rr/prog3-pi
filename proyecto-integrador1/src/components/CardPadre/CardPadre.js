import React from "react";
import CardHijo from "../CardHijo/CardHijo";

function CardPadre (props) {
    console.log(props.info)
    return (
    <>
       {
        props.info.map(elm => <CardHijo data={elm}/>)
       }
    </>
    
    );
}

export default CardPadre;