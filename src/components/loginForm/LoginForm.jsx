import { LoginFormStyled } from "./LoginFormStyled";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
const modalRoot = document.querySelector('#modal-root')
export const LoginForm = ({setLoginFormTriger, loginTriger}) => {
    const nameId = nanoid();
    const emailId = nanoid();
    const passwordId = nanoid();
    const confirmPasswordId = nanoid();

    return createPortal( <div className="overlay">
        <LoginFormStyled>
            <h2>{loginTriger ? "LOGIN" : "SIGNUP"}</h2>
            {!loginTriger && <>
                <label htmlFor={nameId}>Name</label>
                <input type="password" id={nameId}/>
            </>}
            <label htmlFor={emailId}>Email</label>
            <input type="text" id={emailId}/>
            <label htmlFor={passwordId}>Password</label>
            <input type="password" id={passwordId}/>
            {!loginTriger && <>
                <label htmlFor={confirmPasswordId}>Confirm password</label>
                <input type="password" id={confirmPasswordId}/>
            </>}
            <div className="buttonContainer">
                <button type="button" onClick={() => {setLoginFormTriger(false)}}>cancel</button>
                <button type="submit" className="active">submit</button>
            </div>
            
        </LoginFormStyled>
    </div>, modalRoot)
}