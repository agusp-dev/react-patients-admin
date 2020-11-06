import React, { Fragment, useState } from 'react'
import { Form } from './components'
import './index.css'

function App() {

	const [appointments, addAppointments] = useState([])

	const createAppointment = newAppointment => {
		addAppointments([
			...appointments,
			newAppointment
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
						c2
					</div>

				</div>

			</div>
		</Fragment>
  );
}

export default App;
