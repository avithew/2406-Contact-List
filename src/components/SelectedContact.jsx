import { useState } from "react";
import { useEffect } from "react";

function SelectedContact({ selectedContactID, setSelectedContactID }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const f = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`
        );
        const data = await f.json();
        setContact(() => {
          return data;
        });
        console.log(data);
        console.log(contact);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  function reset() {
    setSelectedContactID(null);
  }

  return (
    <div>
      <div>
        {
          //contact.name
        }
      </div>
      <button onClick={reset}></button>
    </div>
  );
}

export default SelectedContact;
