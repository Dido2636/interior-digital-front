import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");

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
      localStorage.setItem("user", JSON.stringify(decodeUser));

   
      console.log("User connecté : ", decodeUser);

      navigate("/users/espace-deco");
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
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          className="input-field"
          type="text"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit" className="btn-login">
          connexion
        </button>

        <div className="inscrivez-vous">
          <p className="small-text">Vous n'avez pas encore de compte ?</p>
          <Link to="/users/register" className="home-link">
            <button className="btn-login">Inscrivez-vous !</button>
          </Link>
        </div>
       
      </form>
    </div>
  );
}

export default LoginUser;
