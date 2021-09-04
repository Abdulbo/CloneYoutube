import { Link } from "react-router-dom";
import "./ChanellVideo.scss"


const ChanellVideo = ({video}) => {
    return (
        <div  className="wrapper-chanell-video">
           <Link to="video" className='wrapper-chanell-video__link'>
              <img src={video} alt='rasm'  className="video-chanell" />
           </Link>
            <div className="wrapper-chanell-video__wrapper-discription">
                <h3>
                     Choosing The Best Audio Player Software For Your Computer
                </h3>
                <p>
                Your cheap internet-based banner advertising will 
                become one of the sought for ads there are. Today, 
                the world of Internet advertising is rapidly evolving 
                beyond banner ads and intrusive pop-ups. Bayles A common medium 
                for advertising on the Internet is the use of banner ads. 
                </p>
                <span>11k views  ·  6 months ago</span>
            </div>

        </div>
    );
};


export default ChanellVideo;