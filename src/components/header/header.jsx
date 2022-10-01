export const Header = ({isAutorised, setLoginModalToggle, userName, removeLogedUser}) => {
    return(
        <header>
            <h1>Filmoteka</h1>
            <button type="button">home</button>
            {isAutorised ? 
                <button type="button">my library</button> :
                <button type="button" onClick={() => setLoginModalToggle(true)}>log in</button>
            }
            {isAutorised && <button type="button" onClick={removeLogedUser}>{"Log Out " + userName}</button>}
        </header>
    )
}