import { Component } from 'react';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    console.log('it is app method addContact');
    console.log('contact', name, number);
    const newContact = {
      name,
      number,
      id: nanoid(5),
    };
    const NameNornalized = name.toLowerCase();

    const IsInContacts = this.state.contacts.some(
      contact => contact.name.toLowerCase() === NameNornalized
    );

    console.log('IsInContacts', IsInContacts);

    if (IsInContacts) alert(`${name} is olready in contacts`);
    else
      this.setState(prevStaate => ({
        contacts: [...prevStaate.contacts, newContact],
      }));

    console.log('state app after setstate', this.state);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    console.log(evt.currentTarget.value);
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const normalisedFilter = this.state.filter.toLowerCase();

    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );

    console.log('filter', this.state.filter);
    console.log('filtered contacs', filtredContacts);

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList
          contacts={filtredContacts}
          onDelete={this.deleteContact}
          filter={this.state.filter}
          onFilterChange={this.changeFilter}
        />
      </Container>
    );
  }
}
