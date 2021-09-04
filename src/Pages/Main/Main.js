import "./Main.scss";
import { Link } from "react-router-dom";
import {  useEffect , useState } from "react";
//Icons
import MenuIcon from "../../Assets/img/menu-icon.png";
import VideoIcon from "../../Assets/img/video-icon.png";
import CallIcon from "../../Assets/img/qonigiroq.png";
import UserImg from "../../Assets/img/Userpic.png";

//img
import ImgUser from "../../Assets/img/Oval-12.png";
import Imgleft from "../../Assets/img/Left Arrow.png";
import ImgRight from "../../Assets/img/Right Arrow.png";
import ImgDesc from "../../Assets/img/desicription-video.png";
//components
import Saidbar from "../../Components/Saidbar/Saidbar";
import HeaderVideo from "../../Components/HeaderVideo/HeaderVideo";
import MainVideo from "../../Components/Mainvideo/MainVideo";
import FooterVideo from "../../Components/FooterVideo/FooterVido";




const Main = () => {
    const [videos, setVideos] = useState([]);
    const [lodenig,setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then((res) => res.json())
        .then((data) => {
            setLoading(false)
            setVideos(data.filter(data => data.albumId === 5))
        })},[lodenig]);
    
    return (
        
     <>
        <Saidbar />
        <div className="main">
        
            <header className="header">
                <form>
                    <input className="header__input" type="search"  placeholder="Search"/>
                </form>
                <span className="header__wrapper">
                    <img src={VideoIcon} alt="icon" />
                    <img src={MenuIcon} alt="icon" />
                    <img className="cal-img" src={CallIcon} alt="icon" />
                    <Link to="/chanell">
                        <img src={UserImg} alt="img" />
                    </Link>
                </span>
            </header>
            <main className="main-vido">
                <div className="main-vido__wrapper-head">
                    <Link to="/chanell">
                    <span>
                        <img src={ImgUser} alt="rasm" />
                        <h3>Dollie Blair</h3>
                    </span>
                    </Link>
                <span className="wrapper-head__wrapper-scrol-btn">
                      <button className="scrol-btn">  <img className="wrapper-scrol-btn__img-left" src={Imgleft} alt="rasm" /></button>
                      <button className="scrol-btn" >  <img className="wrapper-scrol-btn__img-right"src={ImgRight} alt="rasm" /></button>
                </span>
                </div>
                { lodenig && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
               {videos.length > 0 && <ul className="header-list">
                {videos.map((video) =>(
                   <HeaderVideo key={video.id} id={video.id} videoTitle={video.title} videoImg={video.url} />
                ))}
                </ul>}
                <div className="main-vido__wrapper-main">
                  <Link to="/chanell" >
                      <h3>Recommended</h3>
                  </Link>
                    <span className="wrapper-main__wrapper-scrol-btn">
                        <button className="scrol-btn">  <img className="wrapper-scrol-btn__img-left" src={Imgleft} alt="rasm" /></button>
                        <button className="scrol-btn" >  <img className="wrapper-scrol-btn__img-right"src={ImgRight} alt="rasm" /></button>
                    </span>
                </div>
                { lodenig && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                {
                    
                    videos.length > 0 && <ul className="main-list">
                      {videos.map(video => (
                            <MainVideo   key={video.id}  videoTitle={video.title} videoImg={video.url}/>
                      ))}
                    </ul>
                }
                <div className="main-vido__wrapper-footer">
                  <div className="wrapper-video__wrapper-title">
                   <Link to="/chanell">
                   <img src={ImgDesc} alt="rasm" />
                     <h3>Food & Drink</h3>
                     <p>Recommended channel for you</p>
                   </Link>
                  </div>
                    <span className="wrapper-main__wrapper-scrol-btn">
                        <button className="button-subscribe">Subscribe 2.3m</button>
                        <button className="scrol-btn">  <img className="wrapper-scrol-btn__img-left" src={Imgleft} alt="rasm" /></button>
                        <button className="scrol-btn" >  <img className="wrapper-scrol-btn__img-right"src={ImgRight} alt="rasm" /></button>
                    </span>
                </div>
                { lodenig && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                {
                    videos.length > 0 && <ul className="footer-list">
                      {videos.map(video => (
                            <FooterVideo   key={video.id}  videoTitle={video.title} videoImg={video.url}/>
                      ))}
                    </ul>
                }
            </main>
        </div>
     </>
    );
};



export default Main;