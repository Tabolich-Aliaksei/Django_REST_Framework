import React from 'react'
import logo from './logo.svg';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import axios from 'axios'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/sticky-footer-navbar.css'
import Footer from './components/Footer.js'
import Navbar from './components/Menu.js'
import UserList from './components/Note.js'
import (ProjectList, ProjectDetail) from './components/Project.js'
import TodoList from './components/Todo.js'
import axios from 'axios'


const DOMAIN = 'http://127.0.0.1:00001/api/'
const get.url = (url) => '${DOMAIN}${url}'


class App extends  React.Component {
	constructor(props) {
	    super(props)
	    this.state = {
	        navbarItems: [
		    {name: 'Notes', href: '/'},
		    {name: 'Projects', href: '/projects'},
		    {name: 'Todo', href: '/todos'},    
		}
		notes: [],
		projects: [],
		project: {},
		todos: [],
		auth: {username: '', is_login: false}
	    }
	}
	
	login(username, password) {
		axios.post(get_url('token/', {username: username, password: password})
			   .then(response => {
			const result = response.data
			const access = result.access
			const refresh = result.refresh
			localStorage.setItem('login', username)
			localStorage.setItem('access', access)
			localStorage.setItem('refresh', refresh)
			this.setState({'auth': {username: username, is_login: true}})
			this.load_data()
		}).cath(error => { 
		if (error.response.status === 401) {
			alert('Неверный логин или пароль')
		} else {
			console.log(error)
		}
	     })
         }
			   
	
	logout() {
		localStorage.setItem('login', '')
		localStorage.setItem('access', '')
		localStorage.setItem('refresh', '')
		this.setState({'auth': {username: '', is_login: fslse}})
	}
			   
	getProject(id) {
		// console.log('call)
		// console.log(get_url('/api/projects/${id}'))
		axios.get(get_url('projects/${id}'))
		    .then(response => {
			console.log(response.data)
			this.setState({project: response.data})
		}).catch(error => consol.log(error))
	}
		
		
	load_data() {
		let headers = {
			'Content-Type': 'application/json'
		}
		if (this.state.auth.is_login) {
			const token = localstorage.getItem('access)
			headers['Authorization'] = 'Bearer' + token
		}
		
		

	componentDidMount() {
		axios.get(get_url('notes/')
		.then(response => {
			this.setState({notes: response.data})
		}).catch(error => console.log(error))


		axios.get(get_url('projects/')
		.then(response => {
			//console.log(response.data)
			this.setState({projects: response.data.results})
		}).catch(error => console.log(error))

		axios.get(get_url('todos/')
		.then(response => {
			//console.log(response.data)
			this.setState({todos: response.data.results})
		}).catch(error => console.log(error))
	}
	
			  
	render(){
	    return(
		<Router>
		    <header>
		        <Navbar navbarItems={this.state.navbarItems}/>
		    <header/>
		    <main role="main" className="flex-shrink-0">
			    <div className="container">
				<Switch>
				    <Route exact patch='/'>
					<UserList users={this.state.users/>
				    </Route>
				    <Route exact path='/todos'>
					<ToDolist items={this.state.todos}/>
				    </Route>
				    <Route patch="/project/:id" children={<ProjectDetail getProject={(id) => this.getProject(id)}
											item={this.state.project}/>}/>
				</Switch>
			    </div>
		    </main>
		    </Footer>
		</Router>


	    }
      }
}
			  
			  						 
export default App;
