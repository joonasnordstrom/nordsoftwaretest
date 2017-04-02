import React from 'react';
import ContactList from './contactslist';
import CreateContact from './createcontact';
import _ from 'lodash';
import './App.css';

let id = 123456;

function generateID(){
    id += 1;
    return id;
  }
let frontNames = ["Pekka", "Jari", "Kari", "George", "Obama", "Judd", "Timo-Liisa", "Kullervo", "Tarja", "Dmitriy", "Votu", "Masa"];
let lastNames = ["Aaltonen", "Timonen", "Turunen", "Jarinen", "Masanen", "Pasanen", "Pulkkinen","Tarabin", "Nazaretilaine", "Napanderus"];
let domains = ["google.com", "jippii.fi", "netti.fi", "luukku.com", "outlook.com", "osataan.tk"];

function generateContacts(){
  for (let i=0; i<20;i++){
    contacts.push({
      id: generateID(),
      fullName: frontNames[Math.floor(Math.random()*frontNames.length)] + " " + lastNames[Math.floor(Math.random()*lastNames.length)],
      email: frontNames[Math.floor(Math.random()*frontNames.length)] + "." + lastNames[Math.floor(Math.random()*lastNames.length)]+"@"+domains[Math.floor(Math.random()*domains.length)],
      phoneNumber: "040"+Math.floor((Math.random()*9999999)+1000000)
    });
    this.setState({contacts: this.state.contacts})
  }
}

const contacts = [
{
  id: generateID(),
  fullName: 'Joonas Nordström',
  email: 'Joonas.Nordstrom12@gmail.com',
  phoneNumber: '0445542063'
}
];

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contacts
    };
    generateContacts.apply(this)
  }

  render() {
    return (
      <div className="my-style" >
        <div className="my-header">
        <h1 className="my-title"><img src="https://avatars1.githubusercontent.com/u/2654995?v=3&s=200" className="logo" />Nord Software</h1>
        </div>
        <div className="my-content">
        <h2 className="content-header">List of participants</h2>
        <div className="add-form">
        <CreateContact contacts = {this.state.contacts} createContact={this.createContact.bind(this)} />
        </div>
        <div className="my-table">
        <ContactList
          contacts={this.state.contacts}
          saveContact={this.saveContact.bind(this)}
          deleteContact={this.deleteContact.bind(this)}
        />
        </div>
        </div>

      </div>
    );
  }

  createContact(fullName, email, phoneNumber){
    this.state.contacts.push({
      id: generateID(),
      fullName,
      email,
      phoneNumber

    });
    this.setState({ contacts: this.state.contacts });

  }

  saveContact(id, newInfo) {
    let foundContact = _.find(this.state.contacts, contact => contact.id === id);
    foundContact.fullName = newInfo.fullName;
    foundContact.email = newInfo.email;
    foundContact.phoneNumber = newInfo.phoneNumber;

    this.setState({ contacts: this.state.contacts });
  }

  deleteContact(infoToDelete) {
    _.remove(this.state.contacts, contact => contact.id === infoToDelete);
    this.setState({ contacts: this.state.contacts });
  }
}
