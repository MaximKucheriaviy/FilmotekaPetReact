import { LoginFormStyled } from "./LoginFormStyled";
import { signUpUser, loginUser } from "../../redux/operrations";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { resetLoginError } from "../../redux/slices";


const modalRoot = document.querySelector('#modal-root')


export const LoginForm = ({ setLoginFormTriger, loginTriger }) => {
    const nameId = nanoid();
    const emailId = nanoid();
    const passwordId = nanoid();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const token = useSelector((state) => state.user.token);
    const errorMessage = useSelector((state) => state.user.error);

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        if (!loginTriger) {
            dispatch(signUpUser({ name, email, password }));
        }
        else {
            dispatch(loginUser({ email, password }));
        }
    }

    const chageHandler = (event) => {
        const target = event.target;
        dispatch(resetLoginError());
        switch (target.name) {
            case "name":
                setName(target.value);
                break;
            case "email":
                setEmail(target.value);
                break;
            case "password":
                setPassword(target.value);
                break;
            default:
                return;
        }
    }

    useEffect(() => {
        if (token) {
            setLoginFormTriger(false);
        }
    }, [setLoginFormTriger, token]);

    return createPortal(<div className="overlay">
        <LoginFormStyled>
            <div className="topBlock">
                <h2>{loginTriger ? "LOGIN" : "SIGNUP"}</h2>
                {errorMessage &&  <p className="errorMessage">{errorMessage}</p>}
            </div>
            {!loginTriger && <>
                <label htmlFor={nameId}>Name</label>
                <input type="text" id={nameId} value={name} name="name" onChange={chageHandler} />
            </>}
            <label htmlFor={emailId}>Email</label>
            <input type="text" id={emailId} value={email} name="email" onChange={chageHandler} />
            <label htmlFor={passwordId}>Password</label>
            <input type="password" id={passwordId} value={password} name="password" onChange={chageHandler} />
            <div className="buttonContainer">
                <button type="button" onClick={() => { setLoginFormTriger(false) }}>cancel</button>
                <button type="submit" className="active" onClick={submitHandler}>submit</button>
            </div>

        </LoginFormStyled>
    </div>, modalRoot)
}