import "./Video.scss"
import { Link } from "react-router-dom";
import { useEffect  , useState} from "react";

//components
import SectionVideo from "../../Components/SectionVideo/SectionVideo";

//img
import ImgGamburger from "../../Assets/img/gamburger.png";
import ImgYoutube from "../../Assets/img/youtube-icon.png";
import ImgYoutubeText from "../../Assets/img/youtube-text.png";
import ImgSearch from "../../Assets/img/serach-icon.png";
import ImgVideo from "../../Assets/img/video-icon.png";
import ImgMenu from "../../Assets/img/menu-icon.png";
import ImgCall from "../../Assets/img/qonigiroq.png";
import ImgUser from "../../Assets/img/Userpic.png";
import ImgLike from "../../Assets/img/like.png";
import ImgDislike from "../../Assets/img/disLike.png";
import ImgShere from "../../Assets/img/shere.png";
import MenuIcon from "../../Assets/img/More.png";
import ImgDisc from "../../Assets/img/desicription-video.png"





const Video = () => {
  const [data,setData] = useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => setData(data.filter(data => data.albumId === 2)))
  },[])
 
    return (
        <div className="video-page">
          <header className="video-page__header-video">
            <div className="header-video__wrapper-search">
                <img src={ImgGamburger} alt="rasm" />
               <span>
               <img className="youTube-Icon" src={ImgYoutube} alt="rasm" />
                <img src={ImgYoutubeText} alt="rasm" />
               </span>
                <form>
                    <input className="header-video__input-search" type="search" placeholder="Search" />
                    <button><img src={ImgSearch} alt="rasm" /></button>
                </form>
            </div>
            <div className="header-video__wrapper-user">
                <img src={ImgVideo} alt="rasm" />
                <img src={ImgMenu} alt="rasm" />
                <img src={ImgCall} alt="rasm" />
              <Link to="/chanell" >
                <img src={ImgUser} alt="rasm" />
              </Link>
            </div>
          </header>
        <div className="main-section">
        <div className="video-page__video-disc-section-piece">
            <iframe width={950} height={375} src="https://www.youtube.com/embed/rlhb4BHF6x8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
             gyroscope; picture-in-picture" allowFullScreen />
             <h3 className="video-disc-section-piece__title">Dude You Re Getting A Telescope</h3>
             <div className="wrapper-btn-like">
               <p>123k views</p>
               <span>
                 <button>
                   <img src={ImgLike} alt="rasm" />
                   123k views
                 </button>
                 <button>
                 <img src={ImgDislike} alt="rasm" />
                    435k
                 </button>
                 <button>
                 <img src={ImgShere} alt="rasm" />
                    Share
                 </button>
                <button>  <img src={MenuIcon} alt="rasm" /> </button>
               </span>
             </div>
             <div className="video-page__video-section-piece_footer-disc">
                  <div className="footer-disc__discription-wrapper">
                        <img src={ImgDisc} alt="rasm" />
                         <div className="discription-wrapper__wrapper-disc">
                        <span>
                        <h3>Food & Drink</h3>
                          <p>Published on 14 Jun 2019</p>
                        </span>
                         <p>A successful marketing plan relies heavily
                          on the pulling-power of advertising copy. 
                          Writing result-oriented ad copy is difficult,
                           as it must appeal to, entice, and convince 
                           consumers to take action. There is no magic formula
                            to write perfect ad copy; it is based on a number o factors, including
                          ad placement, demographic, even the consumer’s mood when they see your ad.
                        </p>
                        <p>Show more</p>
                         </div>
                    </div>
                    <button>Subscribe 2.3m</button>
                 </div>
          </div>
              <div className="video-page__video-section-piece">
                 <div>
                 <h3>Next</h3>
                  <span className="video-section-piece__wrapper-title">
                    <p className="wrapper-title__text">Autoplay</p>
                    <input  className="wrapper-title__checkbox" type="checkbox" />
                  </span>
                 </div>
              { data.length > 0 && <ul className="sec-List-video-img"> 
                 {
                   data.map(data => (
                   
                    <SectionVideo key={data.id} Img={data.url} Title={data.title} />
                   ))
                 }
                </ul>}
              </div>
         </div>
        </div>
    );
};



export default Video;