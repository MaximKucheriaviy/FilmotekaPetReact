import { Header } from "../components/header/header"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
export const Library = ({isAutorised, userData, removeLogedUser}) => {
    return<>
        <Header 
            libraryTogle
            isAutorised={isAutorised} 
            userName={userData.email}
            removeLogedUser={removeLogedUser}
        />
        {!isAutorised && <Navigate to="/"/>}
        <Outlet/>
    </>
}