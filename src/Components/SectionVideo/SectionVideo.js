import { Link } from "react-router-dom";
import "./SectionVideo.scss"

const SectionVideo = ({Img,Title}) => {
    return (
   <Link className="linkVideo" to="/video">
       <li className="sec-item-video">
            <img className="sec-item-video-img" src={Img} alt="rasm" />
            <h3>{Title}</h3>
            <span>
            <p>123k views</p> 
            <p>Dollie Blair</p> 
            </span>
        </li>
   </Link>
        
   
      
    );
};



export default SectionVideo;