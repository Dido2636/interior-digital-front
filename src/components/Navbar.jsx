import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  const userDatadecorator = JSON.parse(localStorage.getItem("decorator"));
  const userDataFirstname = userData ? userData.user.firstname : "";
  const userDataFirstnamedecorator = userDatadecorator ? userDatadecorator.decorator.firstname : "";
  
  // Déboguer les données utilisateur récupérées
  console.log(userData);
  console.log(userDataFirstname);
  console.log(userDatadecorator);
  console.log(userDataFirstnamedecorator);

  const handleLogout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("decorator");
    navigate("/login");
  };

  return (
    <section className="Navbar">
      <Link to="/" className="home-link">
        <h1 className="title">INTERIOR DIGITAL</h1>
      </Link>

    
        {userData || userDatadecorator ? (
          <>
          <div className="box-login"> 

            <p> Bienvenue {userDataFirstname || userDataFirstnamedecorator }, sur votre espace déco.</p>
            <button onClick={handleLogout}>Deconnexion</button>

          </div>
          </>
        ) : (
          <div className="box-login">
            <Link to="/users/login" className="home-link">
              CLIENT
            </Link>
            <Link to="/decorators/login" className="home-link">
              DECORATEUR
            </Link>
          </div>
        )}
      
    </section>
  );
}

export default Navbar;

// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const userData = JSON.parse(localStorage.getItem("decorator"));
//   const userDataFirstname = userData ? userData.user.firstname : "";

  
//   // Déboguer les données utilisateur récupérées
//   console.log(userData);
//   console.log(userDataFirstname);

//   const handleLogout = async () => {
//     localStorage.removeItem("decorator");
//     navigate("/login");
//   };

//   return (
//     <section className="Navbar">
//       <Link to="/" className="home-link">
//         <h1 className="title">INTERIOR DIGITAL</h1>
//       </Link>

    
//         {userData ? (
//           <>
//             <p>{userDataFirstname}</p>
//             <button onClick={handleLogout}>Deconnexion</button>
//           </>
//         ) : (
//           <div className="box-login">
//             <Link to="/users/login" className="home-link">
//               CLIENT
//             </Link>
//             <Link to="/decorators/login" className="home-link">
//               DECORATEUR
//             </Link>
//           </div>
//         )}
      
//     </section>
//   );
// }

// export default Navbar;
