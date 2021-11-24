import React from "react";
import {useParams} from "react-router-dom";


function Division () {
	let {numeroPrimero, numeroSegundo} = useParams();
	return (
	<h1>Division de dos numeros es: {parseInt(numeroPrimero)/parseInt(numeroSegundo)}</h1>)
}

export default Division;
