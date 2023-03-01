import { Header } from "../components/header/header"
import { useState, useEffect, useCallback, useRef } from "react"
import { LoginForm } from "../components/loginForm/LoginForm"
import { FilmList } from "../components/filmList/FilmList";
import { PaginationSystem } from "../components/paginationControl/PaginationControl";
import { CSSTransition } from "react-transition-group";
import TMDB from '../js/themoviedbAPI';


const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const Home = ({isAutorised, userData, removeLogedUser}) => {
    const [loginFormTriger, setLoginFormTriger] = useState(false); 
    const [signupFormTriger, setSignupFormTriger] = useState(false);
    const [cards, setCards] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [inProp, setInProp] = useState(false);
    const ref = useRef(null)


    const getFimesToCards = useCallback(async () => {
        const result = await api.getTrendings(page);
        setCards(result.results)
        setTotalPages(result.total_pages)
        setInProp(true);
    }, [page]);

    useEffect(() => {
        getFimesToCards();
    }, [getFimesToCards, page]);
    
    const setPageTrans = (prop) => {
        setInProp(false);
        setTimeout(() => {
            setPage(prop);
        }, 500)
    }

    return<>
        <Header
            setLoginFormTriger={setLoginFormTriger}
            setSignupFormTriger={setSignupFormTriger}
        />
        {loginFormTriger && <LoginForm setLoginFormTriger={setLoginFormTriger} loginTriger/>}
        {signupFormTriger && <LoginForm setLoginFormTriger={setSignupFormTriger}/>}
        <div className="container">
            <CSSTransition className={inProp ? "listTransitions" : "listTransitions-closed"} classNames="listTransitions" nodeRef={ref} in={inProp} timeout={500}>
                <div ref={ref}>
                    <FilmList  cards={cards}/>
                </div>
            </CSSTransition>
           {totalPages > 1 &&<PaginationSystem totalPages={totalPages} setPage={setPageTrans} page={page}/>}
        </div>
    </>
}