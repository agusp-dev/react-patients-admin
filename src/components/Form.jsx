import React, { Fragment } from 'react'

const Form = () => {

	return (
		<Fragment>
			<h2>Create appointment</h2>
			<form>
				<label>Pet Name</label>
				<input 
					className='u-full-width'
					type='text'
					name='pet'
					placeholder='Pet Name'/>

				<label>Owners Name</label>
				<input 
					className='u-full-width'
					type='text'
					name='owner'
					placeholder='Owner Name'/>

				<label>Date</label>
				<input 
					className='u-full-width'
					type='date'
					name='date'/>

				<label>Time</label>
				<input 
					className='u-full-width'
					type='time'
					name='time'/>	

				<label>Symtoms</label>
				<textarea 
					className='u-full-width'
					name='symtoms'
					placeholder='Description'>
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

export { Form }