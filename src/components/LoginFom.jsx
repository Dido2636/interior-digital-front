import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:7890/users/login", {
        email,
        password,
      });
      console.log(response);
      const { token } = response.data;
      const decodeUser = jwtDecode(token);
      localStorage.setItem("token", JSON.stringify(decodeUser));
  
      setToken(decodeUser);
      console.log("User connecté : ", decodeUser);

      navigate("/");
    } catch (error) {
      console.error("Erreur de connexion", error.message);
   
    }
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Mot de Passe</label>
        <input
          type="text"
          placeholder="entrez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">connexion</button>
      </form>
    </div>
  );
}

export default LoginForm;
