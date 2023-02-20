// import TMDB from './js/themoviedbAPI';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";

// const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="library" element={<Library/>}></Route>
      </Routes>
    </div>
  )
}

