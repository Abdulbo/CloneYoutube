import "./MainVideo.scss";
import { Link } from "react-router-dom";


const MainVideo = ({videoTitle,videoImg}) => {
    return (
       <Link to="/video" className="main-link">
            <li  className="mainVideo-wrapper">
                     <img  className="mainVideo-wrapper__img-video" src={videoImg} alt="rasm" />
                     <h3 className="mainVideo-wrapper__img-title">{videoTitle}</h3>
                     <span>
                     <p>80k views  ·  3 days ago</p>
                     <p>Dollie Blair</p>
                     </span>
            </li>
       </Link>
    );
};



export default MainVideo;