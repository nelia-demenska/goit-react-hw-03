import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import './App.css'
import ContactForm from './components/ContactForm'
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

export default function App() {

const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  const [filter, setFilter] = useState("");


  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact}/>
    </div>
  )
}
