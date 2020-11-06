import React, { Fragment, useState } from 'react'
import { Form, Appointment } from './components'
import './index.css'

function App() {

	const [appointments, addAppointments] = useState([])

	const createAppointment = newAppointment => {
		addAppointments([
			...appointments,
			newAppointment
		])
	}

	const removeAppointment = id => {
		console.log('removing', id)
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
						<h2>Manage your Appointments</h2>
						{appointments && appointments.map(appointment => (
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
