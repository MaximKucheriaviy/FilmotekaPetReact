import { Header } from "../components/header/header"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { LoginForm } from "../components/loginForm/LoginForm"
export const Home = ({isAutorised, userData, removeLogedUser}) => {
    const [loginFormTriger, setLoginFormTriger] = useState(false); 
    const [signupFormTriger, setSignupFormTriger] = useState(false);
    return<>
        <Header 
            isAutorised={isAutorised} 
            userName={userData.email}
            removeLogedUser={removeLogedUser}
            setLoginFormTriger={setLoginFormTriger}
            setSignupFormTriger={setSignupFormTriger}
        />
        <Outlet/>
        {loginFormTriger && <LoginForm setLoginFormTriger={setLoginFormTriger} loginTriger/>}
        {signupFormTriger && <LoginForm setLoginFormTriger={setSignupFormTriger}/>}
    </>
}