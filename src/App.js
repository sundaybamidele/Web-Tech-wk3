import { useState, useEffect } from "react";
import Contact from "./Contact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    /*axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setError(null);
        setContacts(response.data);
      })
      .catch(setError);
    */
     //Using Fetch
    fetch("http://localhost:3000/contact.json")
      .then((response) => response.json())
      .then((response) => {
        setContacts(response);
        setError(null);
      })
      .catch(setError);
    
  }, []);

  if (error) return <p>An error occurred</p>;

  return (
    <div className="App">
      {contacts.map(({ id, name, email, company }) => (
        <Contact
          key={id}
          name={name}
          email={email}
          tagline={company.catchPhrase}
        />
        //tis is changes. s
        //new changrs. s
      ))}
    </div>
  );
}

export default App;
