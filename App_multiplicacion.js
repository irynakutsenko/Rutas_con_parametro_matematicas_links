import React from "react";
import {useParams} from "react-router-dom";


function Multiplicacion () {
	let {numeroPrimero, numeroSegundo} = useParams();
	return (
	<h1>Multiplicacion de dos numeros es: {parseInt(numeroPrimero)*parseInt(numeroSegundo)}</h1>)
}

export default Multiplicacion;