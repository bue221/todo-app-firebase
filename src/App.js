import React,{ useState, useEffect} from 'react';

import Tarea from './Todo'

import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import db from './firebase'
import firebase from 'firebase'

function App() {

	const [campos, setCampos] = useState('tarea')
	const [tareas, setTareas] = useState([])
	const [tarea, setTarea] = useState('')

	//console.log(campos)

	useEffect(()=>{
		db.collection('tareas').orderBy('timestamp','desc').onSnapshot(snapshot => {
			//console.log(snapshot.docs.map(doc=> doc.data()));
			setTareas(snapshot.docs.map(doc=> ({id: doc.id ,tarea: doc.data().tarea})));
		})
	},[])

	const inputvalue = (e)=>{
		setTarea(e.target.value)
		//console.log(tarea);
	}

	const enviar = (event)=>{
		event.preventDefault();
		db.collection('tareas').add({
			tarea: tarea,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()	
		})
		setTarea('')
	}

	//console.log(tareas)

	return (
		<div className="App">
			<h1>Todo App</h1>
			<form>
				{/*
				<TextField 
				id="standard-basic" 
				label="Escriba a donde desea ingresar los datos" 
				type="text" 
				onChange={(e)=>setCampos(e.target.value)} value={campos}/>
				*/}

				<TextField 
				id="standard-basic" 
				label="Escribe tu tarea" 
				type="text" 
				onChange={inputvalue} value={tarea}/>

				<Button
				disabled={!tarea}
				type= "submit"
				variant="contained" 
				color="primary" 
				href="#contained-buttons" 
				onClick={enviar}>Añadir</Button>
			</form>
			<br />
			{tareas.map(i=>(
			<Tarea 
			key={i.id}
			text={i}/>
			))}
		</div>
		);
}

export default App;
