import React from 'react';

export default class ContactListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		};
	}
	
	render() {
		const {id, fullName, email, phoneNumber} = this.props;

		if (this.state.isEditing){
			return (
				<tr>
					<td>
						<input type="text" defaultValue={fullName} ref="editName" />
					</td>
					<td>
						<input type="email" defaultValue={email} ref="editEmail" />
					</td>
					<td>
						<input type="tel" defaultValue={phoneNumber} ref="editNumber" />
					</td>
					<td>
						<button onClick={this.onSaveClick.bind(this)}>Save</button>
					</td>
					<td>
						<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
					</td>
				</tr>
			);
		}
		return (
			<tr>
				<td>
					{fullName}
				</td>
				<td>
					{email}
				</td>
				<td>
					{phoneNumber}
				</td>
				<td>
					<i onClick={this.onEditClick.bind(this)} className="fa fa-pencil-square-o" aria-hidden="true"></i>
				</td>
				<td>
					<i onClick={this.props.deleteContact.bind(this, this.props.id)} className="fa fa-trash-o" aria-hidden="true"></i>
				</td>
			</tr>

			
			);
	}

	onEditClick() {
		this.setState({isEditing: true});
	}

	onCancelClick() {
		this.setState({isEditing: false});
	}

	onSaveClick(event){
		//event.preventDefault();
		const newInfo = {
			fullName: this.refs.editName.value,
			email: this.refs.editEmail.value,
			phoneNumber: this.refs.editNumber.value

		}

		const id = this.props.id;
		this.props.saveContact(id, newInfo);
		this.setState({ isEditing: false});


	}
}