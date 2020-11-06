import React, { Fragment } from 'react'
import { Form } from './components'
import './index.css'

function App() {
  return (
    <Fragment>
			<h1>Patients Manager</h1>
			<div className='container'>
				<div className='row'>
					<div className='one-half column'>
						<Form />
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
