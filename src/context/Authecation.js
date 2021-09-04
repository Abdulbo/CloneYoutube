import { useState  , createContext} from "react";


const Auth = createContext();

const Provider = ({children}) => {
    const [token ,setToken] = useState(window.localStorage.getItem("token"));
    return (
        <Auth.Provider value={{token ,setToken}} >
            {children}
        </Auth.Provider>
    )
}


export {
    Auth,
    Provider
}