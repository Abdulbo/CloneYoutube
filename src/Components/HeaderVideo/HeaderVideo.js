import "./HeaderVideo.scss";
import { Link } from "react-router-dom";

const HeaderVideo = ({videoTitle,videoImg}) => {
    return (
          
            <Link  to="/video" className="link-headr">
              
                <li className="wrapper-headerVideo">
                    <img className="img-video" src={videoImg} alt="rasm" />
                    <h3 className="img-title">{videoTitle}</h3>
                    <span>
                        <p>80k views  ·  3 days ago</p>
                        <p>Dollie Blair</p>
                    </span>
                </li>
            </Link>
                
    );
};



export default HeaderVideo;