import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import DecoratorRegisterPage from "./pages/DecoratorRegisterPage";
import SpaceDecorator from "./components/EspaceDecorator";
import UserSpacePage from "./pages/UserSpacePage";
import LoginUserPage from "./pages/LoginUserPage";
import DecoratorLoginPage from "./pages/DecoratorLoginPage";
import RegisterUserPage from "./pages/RegisterUserPage";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/login" element={<LoginUserPage />} />
          <Route path="/users/register" element={<RegisterUserPage />} />
          <Route path="/decorators/login" element={<DecoratorLoginPage />} />
          <Route
            path="/decorators/register"
            element={<DecoratorRegisterPage />}
          />
          <Route path="/decorators/espace-creation" element={<SpaceDecorator />} />
          <Route path="/users/espace-deco" element={<UserSpacePage />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
