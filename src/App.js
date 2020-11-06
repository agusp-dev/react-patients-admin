import React, { Fragment, useState, useEffect } from 'react'
import { Form, Appointment } from './components'
import './index.css'

function App() {

	let initialAppointments = JSON.parse(localStorage.getItem('appointments'))
	if (!initialAppointments) {
		initialAppointments = []
	}

	const [appointments, addAppointments] = useState( initialAppointments )

	useEffect( () => {
		if (appointments) {
			localStorage.setItem('appointments', JSON.stringify(appointments))
		} else {
			localStorage.setItem('appointments', JSON.stringify([]))
		}
	}, [appointments])

	const createAppointment = newAppointment => {
		addAppointments([
			...appointments,
			newAppointment
		])
	}

	const removeAppointment = id => {
		addAppointments([
			...appointments.filter(appointment => appointment.id !== id)
		])
	}

  return (
    <Fragment>
			<h1>Patients Manager</h1>
			<div className='container'>
				<div className='row'>
					<div className='one-half column'>
						<Form 
							createAppointment={ createAppointment }/>
					</div>
					<div className='one-half column'>
						<h2>{appointments.length > 0 
							? 'Your Appointments' 
							: 'Add Appointments'}
						</h2>
						{appointments.map(appointment => (
							<Appointment 
								key={ appointment.id }
								appointment={ appointment }
								onRemove={ removeAppointment }/>
						))}
					</div>
				</div>
			</div>
		</Fragment>
  );
}

export default App;
