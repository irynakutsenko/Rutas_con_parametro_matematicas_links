import React from "react";
import {useParams} from "react-router-dom";


function Resta () {
	let {numeroPrimero, numeroSegundo} = useParams();
	return (
	<h1>Resta de dos numeros es: {parseInt(numeroPrimero)-parseInt(numeroSegundo)}</h1>)
}

export default Resta;

