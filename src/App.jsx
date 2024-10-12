import { useEffect, useState } from 'react'

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import contactsData from './contactsData.json';
import { nanoid } from 'nanoid';


function App() {

  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? contactsData;

    return parsedContacts;
  }); 

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedContacts);
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const handleChange = evt => {
    setFilter(evt.target.value)
  };

  const filteredUsers = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevState) => [...prevState, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);

    setContacts(updatedContacts);
  };

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            onAddContact={onAddContact} />
          <SearchBox
            filter={filter}
            onChange={handleChange} />
          <ContactList
            filteredUsers={filteredUsers}
            onDeleteContact={onDeleteContact} />
        </div>
      </>
    )
  }

export default App
