import {useContext} from "react";
import {Auth} from "../context/Authecation";

const useAuth =  (settrOnly) =>{
    const {token , setToken} = useContext(Auth);

    return settrOnly ? [setToken] : [token,setToken];
}

export default useAuth;