import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const LayoutPage = () => {
    return ( 
        <>
            <NavBar />
            <Outlet />
        </> 
    );
}
 
export default LayoutPage;