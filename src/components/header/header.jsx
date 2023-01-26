import { SearchForm } from "../SearchForm/SearchForm"
// import { useLocation } from "react-router-dom";
import { HeaderStyled, HeaderContainer, Logo, NavButton, UserInfoButton } from "./headerStyled";
import { HeaderButtons } from "../HeaderButtons/HeaderButtons";
import { useState } from "react";
import { useSelector } from "react-redux";
import icons from "./images/symbol-defs.svg"
import { logoutUser } from "../../redux/operrations";
import { useDispatch } from "react-redux";


export const Header = ({libraryTogle, setLoginFormTriger, setSignupFormTriger}) => {
    // const location = useLocation();
    const [serarchError] = useState(false);
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();

    const logoutHendloer = () => {
        dispatch(logoutUser(token));
    }
    return(
        <HeaderStyled libraryTogle={libraryTogle}>
            <HeaderContainer>
                <div className="topLine">
                    <Logo>
                        <svg>
                            <use href={`${icons}#iconFilm`}/>
                        </svg>
                        <h1>Filmoteka</h1>
                    </Logo>

                    <nav>
                        <ul>
                            <li>
                                <NavButton to="/">home</NavButton>
                            </li>
                            {token ? 
                            <>
                                <li><NavButton to="/library">my library</NavButton></li> 
                                <UserInfoButton type="button" onClick={logoutHendloer}>Log Out</UserInfoButton>
                            </>
                            :
                            <>
                                <li><UserInfoButton onClick={() => setSignupFormTriger(true)} >sing in</UserInfoButton></li>
                                <li><UserInfoButton onClick={() => setLoginFormTriger(true)} >log in</UserInfoButton></li>
                            </>
                            }
                        </ul>
                    </nav>
                </div>
                {libraryTogle ? <HeaderButtons/> : <SearchForm/>} 
                {serarchError && !libraryTogle && <p className="search-error">Search result not successful. Enter the correct movie name and </p>}
            </HeaderContainer>
        </HeaderStyled>
    )
}