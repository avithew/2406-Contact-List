import React from "react";
import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";

function ContactList({ setSelectedContactID }) {
  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

  //default contacts are dummyContacts
  const [contacts, setContacts] = useState(dummyContacts);

  //fetches contacts from API and updates contacts variable
  useEffect(() => {
    async function fetchContacts() {
      try {
        // your fetch logic will go here
        const f = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await f.json();
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          // Map over data here
          //returning a table row for each contact
          contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                id={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                setSelectedContactID={setSelectedContactID}
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

export default ContactList;
