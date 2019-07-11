import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './App.css';

class App extends Component {
	formatName (user) {
		return user.firstName + ' ' + user.lastName;
	}
	render () {
		const name = 'React';
		const user = {
			firstName: 'F',
			lastName: 'Felix'
		};
		const element = <h1>Hello {this.formatName(user)}</h1>;
		return (
			<div className="App">
				{element}
				<h1>Hello {name}</h1>
			</div>
		);
	}
}

export default hot(module)(App);