import { Header } from "../components/header/header"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
export const Library = () => {
    const token = useSelector(state => state.user.token)
    return<>
        <Header 
            libraryTogle
        />
        {!token && <Navigate to="/"/>}
        <Outlet/>
    </>
}