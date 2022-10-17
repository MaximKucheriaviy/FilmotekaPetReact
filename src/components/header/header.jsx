import { SearchForm } from "../SearchForm/SearchForm"
import { useState } from "react"

export const Header = ({isAutorised, setLoginModalToggle, userName, removeLogedUser}) => {
    const [libraryTogle, setLibraryTogle] = useState(false);
    const logoutHendloer = () => {
        removeLogedUser();
        setLibraryTogle(false);
    }

    return(
        <header>
            <h1>Filmoteka</h1>
            <button type="button" onClick={() => setLibraryTogle(false)}>home</button>
            {isAutorised ? 
                <button type="button" onClick={() => setLibraryTogle(true)}>my library</button> :
                <button type="button" onClick={() => setLoginModalToggle(true)}>log in</button>
            }
            {isAutorised && <button type="button" onClick={logoutHendloer}>{"Log Out " + userName}</button>}
            {libraryTogle ? <button type="button">wached</button> : <SearchForm/>}
            
        </header>
    )
}