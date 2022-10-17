import "./index.scss"
// import TMDB from './js/themoviedbAPI';
import { useState } from "react";
import { AutorisationModal } from "./components/AutorisationModal/AutorisationModal";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

// const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const App = () => {
  const [isAutorised, setIsAutorised] = useState(false);
  const [userData, setUserData] = useState({});

  const setLogedUser = (userData) => {
    setIsAutorised(true);
    setUserData(userData);
  }

  const removeLogedUser = () => {
    setIsAutorised(false);
    setUserData({});
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isAutorised={isAutorised} userData={userData} removeLogedUser={removeLogedUser}/>}>
          <Route path="singIn" element={<AutorisationModal isAutorised={isAutorised} setLogedUser={setLogedUser}/>}/>
          <Route path="logIn" element={<AutorisationModal type="log" isAutorised={isAutorised} setLogedUser={setLogedUser}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

