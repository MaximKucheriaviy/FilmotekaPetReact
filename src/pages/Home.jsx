import { Header } from "../components/header/header"
import { useState, useEffect, useCallback } from "react"
import { LoginForm } from "../components/loginForm/LoginForm"
import { FilmList } from "../components/filmList/FilmList";
import TMDB from '../js/themoviedbAPI';


const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const Home = ({isAutorised, userData, removeLogedUser}) => {
    const [loginFormTriger, setLoginFormTriger] = useState(false); 
    const [signupFormTriger, setSignupFormTriger] = useState(false);
    const [cards, setCards] = useState([]);

    const getFimesToCards = useCallback(async () => {
        const result = await api.getTrendings();
        setCards(result.results)
    }, []);

    useEffect(() => {
        getFimesToCards();
    }, [getFimesToCards]);
    console.log(cards);
    return<>
        <Header
            setLoginFormTriger={setLoginFormTriger}
            setSignupFormTriger={setSignupFormTriger}
        />
        {loginFormTriger && <LoginForm setLoginFormTriger={setLoginFormTriger} loginTriger/>}
        {signupFormTriger && <LoginForm setLoginFormTriger={setSignupFormTriger}/>}
        <div className="container">
            <FilmList cards={cards}/>
        </div>
    </>
}