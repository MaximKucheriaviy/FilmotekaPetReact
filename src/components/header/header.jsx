import { SearchForm } from "../SearchForm/SearchForm"
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom";
import { HeaderStyled } from "./headerStyled";

export const Header = ({isAutorised, userName, removeLogedUser, libraryTogle}) => {
    const location = useLocation();
    const logoutHendloer = () => {
        removeLogedUser();
    }
    return(
        <HeaderStyled>
            <h1>Filmoteka</h1>
            <NavLink to="/">home</NavLink>
            {isAutorised ? 
                <NavLink to="/library">my library</NavLink> :
                <>
                    <NavLink to="/singIn" state={{from: location}}>sing in</NavLink>
                    <NavLink to="/logIn" state={{from: location}}>log in</NavLink>
                </>
            }
            {isAutorised && <button type="button" onClick={logoutHendloer}>{"Log Out " + userName}</button>}
            {libraryTogle ? <button type="button">wached</button> : <SearchForm/>}    
        </HeaderStyled>
    )
}