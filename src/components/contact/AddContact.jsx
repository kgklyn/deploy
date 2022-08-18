import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { contactContext } from "../../ContactContext";

const AddContact = () => {
  const { addContact } = useContext(contactContext);
  //   console.log(addContact);

  const [person, setPerson] = useState({
    name: "",
    number: "",
    photo: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...person,
      [e.target.name]: e.target.value,
    };

    setPerson(obj);
  };

  return (
    <Box sx={{ display: "flex", m: 3 }}>
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        name="name"
        onChange={handleInp}
        value={person.name || ""}
      />
      <TextField
        id="outlined-basic"
        label="number"
        variant="outlined"
        name="number"
        onChange={handleInp}
        value={person.number || ""}
      />
      <TextField
        id="outlined-basic"
        label="photo"
        variant="outlined"
        name="photo"
        onChange={handleInp}
        value={person.photo || ""}
      />
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          addContact(person);
          setPerson({ name: "", number: "", photo: "" });
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddContact;
