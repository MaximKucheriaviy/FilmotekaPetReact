import { Header } from "../components/header/header"
import { Outlet } from "react-router-dom"
export const Home = ({isAutorised, userData, removeLogedUser}) => {
    return<>
        <Header 
            isAutorised={isAutorised} 
            userName={userData.email}
            removeLogedUser={removeLogedUser}
            libraryTogle={false}
        />
        <Outlet/>
    </>
}