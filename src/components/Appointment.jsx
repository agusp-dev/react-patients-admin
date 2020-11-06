import React from 'react'

const Appointment = ({ appointment, onRemove }) => {
	const { id, pet, owner, date, time, symtoms } = appointment
	return (
		<div className='cita'>
			<p>Pet: <span>{ pet }</span></p>
			<p>Owner: <span>{ owner }</span></p>
			<p>Date: <span>{ date }</span></p>
			<p>Time: <span>{ time }</span></p>
			<p>Symtoms: <span>{ symtoms }</span></p>
			<button 
				className='button eliminar u-full-width'
				onClick={ () => onRemove(id) }>
					Eliminar
			</button>
		</div>
	)
}

export { Appointment }