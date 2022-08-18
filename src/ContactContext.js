import axios from "axios";
import React, { createContext, useReducer } from "react";

export const contactContext = createContext(); //инициализация

const INIT_STATE = {
  contacts: [],
  contactToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };

    case "EDIT_CONTACT":
      return { ...state, contactToEdit: action.payload };

    default:
      return state;
  }
};

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // console.log(state.contactToEdit);

  const addContact = async (newContact) => {
    await axios.post("http://localhost:8000/contacts", newContact);
    getContacts();
  };

  const getContacts = async () => {
    let { data } = await axios("http://localhost:8000/contacts");
    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    getContacts();
  };

  const editContact = async (id) => {
    let { data } = await axios(`http://localhost:8000/contacts/${id}`);

    let action = {
      type: "EDIT_CONTACT",
      payload: data,
    };
    dispatch(action);
  };

  const saveContact = async (newContact) => {
    await axios.patch(
      `http://localhost:8000/contacts/${newContact.id}`,
      newContact
    );
    getContacts();
  };

  return (
    <contactContext.Provider
      value={{
        addContact: addContact,
        getContacts: getContacts,
        deleteContact: deleteContact,
        editContact: editContact,
        saveContact: saveContact,
        contacts: state.contacts,
        contactToEdit: state.contactToEdit,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;
