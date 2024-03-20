import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginDecorator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:7890/decorators/login", {
        email,
        password,
      });
      console.log(response);
      const { token } = response.data;
      const decodeUser = jwtDecode(token);
      localStorage.setItem("token", JSON.stringify(decodeUser));

      console.log("Decorator connecté : ", decodeUser);

      navigate("/decorators/espace-creation");
    } catch (error) {
      console.error("Erreur de connexion", error.message);
    }
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-user">
       <h2 className="medium-title">Connectez-vous</h2>
        <input
        className="input-field"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>       
        <input
        className="input-field"
          type="text"
          placeholder="entrez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Link to="/decorators/espace-creation">
        <button className="btn-login" type="submit">connexion</button></Link>
        <div className="inscrivez-vous">
        <p className="small-text">Vous n'avez pas de compte ?</p>
        <Link to="/decorators/register">
      <button className="btn-login">Inscrivez-vous</button>
      </Link>

        </div>
      </form>
      
    </div>
  );
}

export default LoginDecorator;
