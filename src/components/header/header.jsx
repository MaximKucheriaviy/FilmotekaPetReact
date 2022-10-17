import { SearchForm } from "../SearchForm/SearchForm"
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom";

export const Header = ({isAutorised, userName, removeLogedUser}) => {
    const [libraryTogle, setLibraryTogle] = useState(false);
    const location = useLocation();
    const logoutHendloer = () => {
        removeLogedUser();
        setLibraryTogle(false);
    }
    return(
        <header>
            <h1>Filmoteka</h1>
            <button type="button" onClick={() => setLibraryTogle(false)}>home</button>
            {isAutorised ? 
                <NavLink to="/library">my library</NavLink> :
                <>
                    <NavLink to="/singIn" state={{from: location}}>sing in</NavLink>
                    <NavLink to="/logIn" state={{from: location}}>log in</NavLink>
                </>
            }
            {isAutorised && <button type="button" onClick={logoutHendloer}>{"Log Out " + userName}</button>}
            {libraryTogle ? <button type="button">wached</button> : <SearchForm/>}
            
        </header>
    )
}