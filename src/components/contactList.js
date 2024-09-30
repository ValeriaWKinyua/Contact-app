import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./contactCard";

const ContactList = (props) => {
  console.log(props.contacts);

  const deleteContactHandler = (id) => {
    props.getContactHandler(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <div className="header">
        <h2
         //style={{ fontFamily: "castellar" }}
         >Contact List</h2>
        <Link to="/add">
          <button className="ui button black right floated">Add Contact</button>
        </Link>
      </div>
      <div className="">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
