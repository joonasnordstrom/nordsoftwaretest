import React from 'react';
import './App.css'
import _ from 'lodash';

export default class ContactList extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			error: null

		};
	}
	renderError(){
		if (!this.state.error) { return null; }
		
		return <div className="redText">{this.state.error}</div>;
	}
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" className="input-name" placeholder="Full name" ref="createName" />
				<input type="email" className="input-email" placeholder="E-mail address" ref="email" />
				<input type="tel" className="input-number" placeholder="Phone number" ref="phone"/>
				<button>Add new</button>
				{this.renderError()}
			</form>
		);
	}
	handleCreate(event){
		event.preventDefault();

		const createName = this.refs.createName;
		const fullName = createName.value;
		const validateNameInput = this.validateInput(fullName);

		const createEmail = this.refs.email;
		const email = createEmail.value;
		const validateEmailInput = this.validateInput(email);

		const createPhone = this.refs.phone;
		const phone = createPhone.value;
		const validatePhoneInput = this.validateInput(phone);

		if(validateNameInput) {
			this.setState({ error:validateNameInput });
			return;
		}
		
		if(validateEmailInput) {
			this.setState({ error:validateEmailInput });
			return;
		}
		
		if(validatePhoneInput) {
			this.setState({ error:validatePhoneInput });
			return;
		}
		
		this.setState({ error: null })
		this.props.createContact(fullName, email, phone);
		this.refs.createName.value = "";
		this.refs.email.value = "";
		this.refs.phone.value = "";

	}

	validateInput(info) {
		if (!info) {
			return 'Please enter contact info.';
		} else {
			return null;
		}
	}
}