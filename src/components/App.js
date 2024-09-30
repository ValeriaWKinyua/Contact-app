import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./contactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts((prevContacts) => [
      ...prevContacts, 
      { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    setContacts((prevContacts) =>
     prevContacts.filter((contact) => 
      contact.id !== id));
    };


  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,
     JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} getContactHandler={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} />
          <ContactList 
          contacts={contacts} 
           getContactHandler={removeContactHandler} 
           /> */}
      </Router>
    </div>
  );
}


export default App;
