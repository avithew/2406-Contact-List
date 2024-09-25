import "./App.css";
import "./components/ContactList";
import ContactList from "./components/ContactList";
import { useState } from "react";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactID, setSelectedContactID] = useState(null);
  return (
    <div>
      {selectedContactID ? (
        <SelectedContact
          setSelectedContactID={setSelectedContactID}
          selectedContactID={selectedContactID}
        />
      ) : (
        <ContactList setSelectedContactID={setSelectedContactID} />
      )}
    </div>
  );
}

export default App;
