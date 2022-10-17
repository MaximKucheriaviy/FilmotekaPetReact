import { createPortal } from "react-dom";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { NavLink, Navigate } from "react-router-dom";
import { singIn, singUp } from "../../js/firebaseApi";

export const AutorisationModal = ({type, setLogedUser, isAutorised}) => {
    const portalNode = useRef(document.querySelector("#modal-root"));
    const loginId = nanoid();
    const passwordId = nanoid();

    const [login, setLogin] = useState("");
    const [passWord, setPassWord] = useState("");

    //const [type, setType] = useState(type);

    const changeHandler = (event) => {
        const {name, value} = event.target;
        switch (name){
            case "login": 
                setLogin(value);
            break;
            case "password": 
                setPassWord(value);
            break;
            default:
                return;
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(type === "log"){
            singUp(login, passWord)
            .then((user) => {
                if(!user){
                    return
                }
                setLogedUser(user);
            })
            setPassWord("");
            setLogin("");
        }
        else{
            singIn(login, passWord)
            .then((user) => {
                if(!user){
                    return
                }
                setLogedUser(user);
            })
            setPassWord("");
            setLogin("");
        }
    }
    
    return createPortal(
        (<div className="overlay" onSubmit={submitHandler}>
            <div className="modal">
                <h2>{type === "log" ? "Log in" : "Sing in"}</h2>
                <NavLink to="/">Close modal</NavLink>
                <form>
                    <label htmlFor={loginId}>Login</label>
                    <input 
                        type="text" 
                        id={loginId}
                        name="login"
                        onChange={changeHandler}
                        value={login}
                    />
                    <label htmlFor={passwordId}>Password</label>
                    <input 
                        type="text" 
                        id={passwordId}
                        name="password"
                        onChange={changeHandler}
                        value={passWord}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
            {isAutorised && <Navigate to="/"/>}
        </div>),
        portalNode.current
    )
}