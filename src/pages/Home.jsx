import { Header } from "../components/header/header"
import { useState, useEffect, useCallback } from "react"
import { LoginForm } from "../components/loginForm/LoginForm"
import { FilmList } from "../components/filmList/FilmList";
import { PaginationSystem } from "../components/paginationControl/PaginationControl";
import TMDB from '../js/themoviedbAPI';


const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const Home = ({isAutorised, userData, removeLogedUser}) => {
    const [loginFormTriger, setLoginFormTriger] = useState(false); 
    const [signupFormTriger, setSignupFormTriger] = useState(false);
    const [cards, setCards] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [page, setPage] = useState(1);


    const getFimesToCards = useCallback(async () => {
        const result = await api.getTrendings(page);
        setCards(result.results)
        setTotalPages(result.total_pages)
    }, [page]);

    useEffect(() => {
        getFimesToCards();
    }, [getFimesToCards, page]);
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
            <PaginationSystem totalPages={totalPages} setPage={setPage}/>
        </div>
    </>
}