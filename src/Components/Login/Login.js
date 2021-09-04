import React from 'react';
import ImgYoutube from "../../Assets/img/youtube-icon.png"


const Login = () => {
    return (
        <div>
           <img src={ImgYoutube}  alt="rasm" />
            <form>
                <input type="email" placeholder="Email..." />
                <input type="password" placeholder="Password" />
                <button type="submit">Sbmited</button>
            </form>
        </div>
    );
};



export default Login;