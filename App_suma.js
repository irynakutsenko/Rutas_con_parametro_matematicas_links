import React from "react";
import {useParams} from "react-router-dom";


function Suma () {
	let {numeroPrimero, numeroSegundo} = useParams();
	return ( 
	<h1>Suma de dos numeros es: {parseInt(numeroPrimero)+parseInt(numeroSegundo)}</h1>)
}

export default Suma;