import React from 'react';
import './App.css'

export default class ContactListHeader extends React.Component{

	render(){
		return (
				<thead>
					<tr>
						<th className="input-name" onClick={() => this.props.sortBy("fullName")}>Name</th>
						<th className="input-email" onClick={() => this.props.sortBy("email")}>E-mail Address</th>
						<th className="input-number" onClick={() => this.props.sortBy("phoneNumber")}>Phone Number</th>
						<th></th>
					</tr>
				</thead>
		);
	}
}