import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { contactContext } from "../../ContactContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts, getContacts } = useContext(contactContext);
  // console.log(contacts);

  //   getContacts();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      ContactList
      {contacts.map((item, index) => (
        <ContactCard key={index} item={item} />
      ))}
    </Box>
  );
};

export default ContactList;
