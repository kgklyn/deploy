import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../../ContactContext";

const EditContact = () => {
  const { contactToEdit, saveContact } = useContext(contactContext);
  // console.log(contactToEdit);

  const [editContact, setEditContact] = useState(contactToEdit);

  useEffect(() => {
    setEditContact(contactToEdit);
  }, [contactToEdit]);

  console.log(editContact);

  const handleInp = (e) => {
    let obj = {
      ...editContact,
      [e.target.name]: e.target.value,
    };
    setEditContact(obj);
  };

  const navigate = useNavigate();

  return (
    <>
      {editContact ? (
        <Box sx={{ display: "flex", m: 3 }}>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            name="name"
            onChange={handleInp}
            value={editContact.name}
          />
          <TextField
            id="outlined-basic"
            label="number"
            variant="outlined"
            name="number"
            onChange={handleInp}
            value={editContact.number}
          />
          <TextField
            id="outlined-basic"
            label="photo"
            variant="outlined"
            name="photo"
            onChange={handleInp}
            value={editContact.photo}
          />
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              saveContact(editContact);
              navigate("/");
            }}
          >
            SAVE
          </Button>
        </Box>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditContact;
