import React, { Fragment, useState } from 'react'
import { v4 as uuidv4, v4 } from 'uuid'
import PropTypes from 'prop-types'

const Form = ({ createAppointment }) => {

	const [appointment, updateAppointment] = useState({
		pet: '',
		owner: '',
		date: '',
		time: '',
		symtoms: ''
	})
	const [error, updateError] = useState(false)

	const handleChange = e => {
		updateAppointment({
			...appointment,
			[e.target.name]: e.target.value
		})
	}

	const { pet, owner, date, time, symtoms } = appointment

	const submitAppointment = e => {
		e.preventDefault()
		
		//validate data
		if (pet.trim() === '' || owner.trim() === '' ||
		 date.trim() === '' || time.trim() === '' || symtoms.trim() === '') {
			updateError(true)
			return
		}

		updateError(false)

		//create ID
		appointment.id = uuidv4()

		//send to main component
		createAppointment( appointment )

		//reset form
		resetForm()
	}

	const resetForm = () => {
		updateAppointment({
			pet: '',
			owner: '',
			date: '',
			time: '',
			symtoms: ''
		})
	}

	return (
		<Fragment>
			<h2>Create appointment</h2>
			{error && (
				<p className='alerta-error'>Please, complete all fields</p>
			)}
			<form onSubmit={ submitAppointment }>
				<label>Pet Name</label>
				<input 
					className='u-full-width'
					type='text'
					name='pet'
					placeholder='Pet Name'
					onChange={ handleChange }
					value={ pet }/>

				<label>Owners Name</label>
				<input 
					className='u-full-width'
					type='text'
					name='owner'
					placeholder='Owner Name'
					onChange={ handleChange }
					value={ owner }/>

				<label>Date</label>
				<input 
					className='u-full-width'
					type='date'
					name='date'
					onChange={ handleChange }
					value={ date }/>

				<label>Time</label>
				<input 
					className='u-full-width'
					type='time'
					name='time'
					onChange={ handleChange }
					value={ time }/>	

				<label>Symtoms</label>
				<textarea 
					className='u-full-width'
					name='symtoms'
					placeholder='Description'
					onChange={ handleChange }
					value={ symtoms }>
				</textarea>	

				<button
					className='u-full-width button-primary'
					type='submit'
				>
				Create
				</button>	
			</form>
		</Fragment>
	)
}

Form.propTypes = {
	createAppointment: PropTypes.func.isRequired
}

export { Form }