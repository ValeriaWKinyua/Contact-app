import React, { useState } from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
     className="item" 
     style={{ padding:'8px', border:'0.5px solid grey',borderRadius:"3px", 
              display: "flex", alignItems: "center", justifyContent:'space-between'}}>
      <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <img className="ui avatar image" src={user} alt="user" />
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
          </div>
      </div>
          
      <div>
      <i
        className="trash alternate outline icon"
        style={{
          color: isHovered ? "red" : "black",
          // marginLeft: "400px",
          cursor: "pointer",
          // justifyContent: "space-between",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => props.clickHandler(id)}  
      ></i>
      </div>
    </div>
  );
};

export default ContactCard;
