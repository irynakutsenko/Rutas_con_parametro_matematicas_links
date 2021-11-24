import { useState } from 'react';
import { Link, Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import App_suma from './App_suma';
import App_resta from './App_resta';
import App_multiplicacion from './App_multiplicacion';
import App_division from './App_division';

function App() {
	let [numeroPrimero, setNumeroPrimero] = useState("");
	let [numeroSegundo, setNumeroSegundo] = useState("");

	let [array, setArray] = useState(["Introduce ", "dos numeros: "])
	function cambiarNumeroPrimero(event) {
		setNumeroPrimero(event.target.value)
	}

	function cambiarNumeroSegundo(event) {
		setNumeroSegundo(event.target.value)
	}

	return (
		 <BrowserRouter> 
		 {
			 array.map(function(arrayElement) {
				 return(<span>{arrayElement}</span>)
			 })
		 }
		 <div>
			 <input type="text" value={numeroPrimero} onChange={cambiarNumeroPrimero}/>
			 <input type="text" value={numeroSegundo} onChange={cambiarNumeroSegundo}/>

			 <button onClick={()=>{
				 setNumeroPrimero("");
				 setNumeroSegundo("");
				 alert(numeroPrimero + "+" + numeroSegundo);
			 }}>Click</button>
			 {/* Para enviar parametro de los numeros*/}
			 <Link to={`/suma/${numeroPrimero}/${numeroSegundo}`}>Suma</Link>
			 <Link to={`/resta/${numeroPrimero}/${numeroSegundo}`}>Resta</Link>
			 <Link to={`/multiplicacion/${numeroPrimero}/${numeroSegundo}`}>Multiplicacion</Link >
			 <Link to={`/division/${numeroPrimero}/${numeroSegundo}`}>Division</Link >
		 </div >
		<Routes>
			{/* Para recibir parametro de los numeros*/}
			<Route path='/suma/:numeroPrimero/:numeroSegundo' element={<App_suma />} />
			<Route path='/resta/:numeroPrimero/:numeroSegundo' element={<App_resta />} />
			<Route path='/multiplicacion/:numeroPrimero/:numeroSegundo' element={<App_multiplicacion />} />
			<Route path='/division/:numeroPrimero/:numeroSegundo' element={<App_division />} />
		</Routes>
		 </BrowserRouter>
		 
	 );
}

export default App;

