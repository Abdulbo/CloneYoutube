
import "./SectionVideo.scss"

const SectionVideo = ({Img,Title}) => {
    return (
   
        <li className="sec-item-video">
            <img className="sec-item-video-img" src={Img} alt="rasm" />
            <h3>{Title}</h3>
            <span>
            <p>123k views</p> 
            <p>Dollie Blair</p> 
            </span>
        </li>
   
      
    );
};



export default SectionVideo;