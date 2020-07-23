import React,{ useState } from 'react';
import db from './firebase';

import './Todo.css'

import { List,ListItem, ListItemText,TextField ,Button} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';

const Todo = props =>{
	//console.log(props.text.id)

	const [open, setOpen] = useState(false)
	const [editado, setEditado] = useState(props.text.tarea)

	const updateTarea = ()=>{
		db.collection('tareas').doc(props.text.id).set({
			tarea: editado
		},{ merge: true })
		//console.log(editado)
		setOpen(false)
	}

	return(
		<List className="" >
			<Dialog open={open} onClose={()=>setOpen(false)} >
				<form className="list" noValidate autoComplete="off">
					<h1>Editar la tarea</h1>
					<TextField 
					value={editado}
					onChange={(e)=>setEditado(e.target.value)}
					id="standard-basic" 
					label={editado} />
					<Button variant="contained" color="secondary" onClick={updateTarea}>
						Editar
					</Button>
				</form>
			</Dialog>

			<ListItem>
				<ListItemText  primary={props.text.tarea}  secondary="Tareas"/>
					<IconButton edge="end" aria-label="delete" onClick={(e)=> db.collection('tareas').doc(props.text.id).delete()}>
						<DeleteIcon />
					</IconButton>
					<IconButton edge="end" aria-label="delete" onClick={()=>setOpen(true)}>
						<EditIcon />
					</IconButton>
				</ListItem>
	         </List>
		);
}

export default Todo;
