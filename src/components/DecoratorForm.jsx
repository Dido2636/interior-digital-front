import React, { useState } from "react";
import axios from "axios";

function DecoratorForm() {
  const [newDecorator, setNewDecorator] = useState({
    company:"",
    firstname: "",
    email: "",
    password: "",
  });

  const createDecorator = async () => {
    try {
      const response = await axios.post(
        `http://localhost:7890/decorators/register`,
        newDecorator
      );
  
      setNewDecorator({
        company:"",
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
          createDecorator();
        }}
      >
       
        <label>
          Société:
          <input
            type="text"
            value={newDecorator.company}
            onChange={(e) =>
              setNewDecorator({ ...newDecorator.company, company: e.target.value })}
          />
        </label>
        <br />
        <label>
          Prenom:
          <input
            type="text"
            value={newDecorator.firstname}
            onChange={(e) =>
              setNewDecorator({
                ...newDecorator, firstname: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={newDecorator.email}
            onChange={(e) => setNewDecorator({ ...newDecorator, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="text"
            value={newDecorator.password}
            onChange={(e) =>
              setNewDecorator({ ...newDecorator, password: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default DecoratorForm;
