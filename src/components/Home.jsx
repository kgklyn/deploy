import React from "react";
import AddContact from "./contact/AddContact";
import ContactList from "./contact/ContactList";

const Home = () => {
  return (
    <div>
      Home
      <AddContact />
      <ContactList />
    </div>
  );
};

export default Home;
