import { Link } from "react-router-dom";
import "./ChanellVideoFooter.scss"

const ChanellVideoFooter = ({videoId,dataImg,dataTitle}) => {
    return (
      <Link className="link-chanell" to="/video" >
            <li className="footer-video-item">
            <img className="footer-video" src={dataImg} alt="rasm" />
            <h3 className="footer-video-title">{dataTitle}</h3>
            <span>
                <p>40k views  ·  4 months ago</p>
                <p>Food & Drink</p>
            </span>
        </li>
      </Link>
    );
};



export default ChanellVideoFooter;