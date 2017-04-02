import React from 'react';
import _ from 'lodash';
import ContactListHeader from './contactlist-header';
import ContactListItem from './contactlist-item';


export default class ContactsList extends React.Component{
	constructor(){
		super();

		this.state= {
			sortBy: null,
			orderBy: false
		}
	}
	renderItems() {
		let contacts = this.props.contacts;
		let orderBy = this.state.orderBy;

		if (this.state.sortBy){
			if(orderBy){
				contacts.sort((a,b) => { 
					if(a[this.state.sortBy] < b[this.state.sortBy])
						return 1;
					if(a[this.state.sortBy] > b[this.state.sortBy])
						return -1;
					return 0;
				});

			}
				
			else{
				contacts.sort((a,b) => { 
					if(a[this.state.sortBy] < b[this.state.sortBy])
						return -1;
					if(a[this.state.sortBy] > b[this.state.sortBy])
						return 1;
					return 0;
				});
			}
		}



		return _.map(contacts, (contact, index) => <ContactListItem key={index
		} {...contact} {...this.props} />

		);
	}

	sortBy(order) {
		this.setState({sortBy: order, orderBy: !this.state.orderBy});
	}

	render() {
		return (

			<table>
				<ContactListHeader sortBy={this.sortBy.bind(this)} />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}