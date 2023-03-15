import React from 'react'
import logo from './logo.svg';
import './App.css';
import NoteList from './components/Note.js'
import axios from 'axios'

class App extends  React.Component {

	constructor(props) {
		super(props)
		this.state = {
			'notes': []
		}
	}

	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/authors')
		.then(response => {
			const notes = response.data
			this.setState(
			{
				'notes': notes
			}
		)
	}).catch(error => console.log(error))
}

export default App;
