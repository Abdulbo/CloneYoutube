import { Redirect, Route } from "react-router";


//hooks
import useAuth from "../hooks/useAuth";

const Public = (props) => {
    const [token] = useAuth();
    if(token){
        return <Redirect to="/" />
    }return <Route {...props} />
}

export default Public;