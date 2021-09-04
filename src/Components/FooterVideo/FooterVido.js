import"./FooterVideo.scss"
import { Link } from "react-router-dom";



const FooterVido = ({videoTitle,videoImg}) => {
    return (
      <Link className="footer-link" to="/video" >
          <li className="footerVideo-wrapper">
              <img className="img-video" src={videoImg} alt="rasm" />
              
              <h3 className="title">{videoTitle}</h3>
              <span>
                <p>80k views  ·  3 days ago</p>
                <p>Dollie Blair</p>
              </span>
          </li>
      </Link>
    );
};



export default FooterVido;