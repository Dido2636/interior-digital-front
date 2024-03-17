import React, { useState } from "react";
import axios from "axios";
import { Link} from 'react-router-dom'

function UserForm() {
  const [newUser, setNewUser] = useState({
    name: "",
    firstname: "",
    email: "",
    password: "",
  });

  const createUser = async () => {
    try {
      const response = await axios.post(
        `http://localhost:7890/users/register`,
        newUser
      );
      // setUsers([...users, response.data]);
      setNewUser({
        name:"",
        firstname: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Erreur");
    }
  };

  return (
    <div>
      <h2>S'enregistrer</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
       
        <label>
          Nom:
          <input
            type="text"
            value={newUser.name}
            onChange={(e) =>
              setNewUser({ ...newUser.name, name: e.target.value }
              )}
          />
        </label>
        <br />
        <label>
          Prenom:
          <input
            type="text"
            value={newUser.firstname}
            onChange={(e) =>
              setNewUser({
                ...newUser, firstname: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="text"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Enregistrer</button>
      </form>
      <Link to="/login">
      <button>SE CONNECTER</button>
      </Link>
    </div>
  );
}

export default UserForm;
