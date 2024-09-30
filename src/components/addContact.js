import React, { useState } from "react";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddContact = (e) => {
    e.preventDefault();
    if (name && email) {
      addContactHandler({ name, email });
      setName("");
      setEmail("");
    }else{
        alert("All fields are mandatory");
    }
  };


  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleAddContact}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="JohnDoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button pink" style={{ cursor: "pointer" }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
