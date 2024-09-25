function ContactRow({ id, name, email, phone, setSelectedContactID }) {
  function setID() {
    setSelectedContactID(id);
  }

  return (
    <tr
      onClick={() => {
        setID();
      }}
    >
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default ContactRow;
