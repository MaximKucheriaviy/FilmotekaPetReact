import "./index.scss"
// import TMDB from './js/themoviedbAPI';
import { useState } from "react";
import { Header } from "./components/header/header";
import { AutorisationModal } from "./components/AutorisationModal/AutorisationModal";

// const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const App = () => {
  const [isAutorised, setIsAutorised] = useState(false);
  const [userData, setUserData] = useState({});
  const [loginModalToggle, setLoginModalToggle] = useState(false);

  const setLogedUser = (userData) => {
    setIsAutorised(true);
    setUserData(userData);
    setLoginModalToggle(false);
  }

  const removeLogedUser = () => {
    setIsAutorised(false);
    setUserData({});
  }

  return (
    <div className="App">
      <Header isAutorised={isAutorised} 
        setLoginModalToggle={setLoginModalToggle}
        userName={userData.email}
        removeLogedUser={removeLogedUser}
      />
      {loginModalToggle && <AutorisationModal 
        setLoginModalToggle={setLoginModalToggle}
        setLogedUser={setLogedUser}
      />}
    </div>
  )
}

