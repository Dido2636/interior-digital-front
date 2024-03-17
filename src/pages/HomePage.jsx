import React from "react";
import { useAuth } from "../context/AuthContext";
import UserForm from "../components/UserForm";
import { Link} from 'react-router-dom'
import MediaUpload from "../components/MediaUpload";


function HomePage() {
  const { currentUser } = useAuth();
  return (
    <div>
       <h1>INTERIOR DESIGN</h1>
      {currentUser ? `Connecté en tant que ${currentUser.email}` : HomePage}
  
{/* 
      <Link to="/users/create">
      <button>CLIENT</button>
      </Link>

      <Link to="/decorators/create">
      <button>DECORATEUR</button>
      </Link>
<br />
      <Link to="/login">
      <button>SE CONNECTER</button>
      </Link>
      
<br />
 */}


    </div>
  );
}

export default HomePage;
