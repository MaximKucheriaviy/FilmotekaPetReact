import { createPortal } from "react-dom";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { singIn } from "../../js/firebaseApi";

export const AutorisationModal = ({setLoginModalToggle, setLogedUser}) => {
    const portalNode = useRef(document.querySelector("#modal-root"));
    const loginId = nanoid();
    const passwordId = nanoid();

    const [login, setLogin] = useState("");
    const [passWord, setPassWord] = useState("");

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
    
    return createPortal(
        (<div className="overlay" onSubmit={submitHandler}>
            <div className="modal">
                <button type="button" onClick={() => setLoginModalToggle(false)}>Close modal</button>
                <form >
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
        </div>),
        portalNode.current
    )
}