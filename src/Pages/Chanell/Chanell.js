import"./Chanell.scss"
import { useEffect,useState} from "react";
import Saidbar from "../../Components/Saidbar/Saidbar"
import { Link, NavLink} from "react-router-dom";


//img
import MenuIcon from "../../Assets/img/menu-icon.png";
import VideoIcon from "../../Assets/img/video-icon.png";
import CallIcon from "../../Assets/img/qonigiroq.png";
import UserImg from "../../Assets/img/Userpic.png";
import ImgChanell from "../../Assets/img/chanell-img.png";
import ChanellUser from "../../Assets/img/chanell-user.png";
import ImgSearch from "../../Assets/img/serach-icon.png";
import ChanellVideo from "../../Components/ChanellVideo/ChanellVideo";
import UserChanell from "../../Assets/img/Oval-chanell.png";
import UserChanell2 from "../../Assets/img/Oval1-chenell.png";
import UserChanell3 from "../../Assets/img/Oval2-chanell.png"
import Imgleft from "../../Assets/img/Left Arrow.png";
import ImgRight from "../../Assets/img/Right Arrow.png";
import ChanellVideoFooter from "../../Components/ChanellVideoFooter/ChanellVideoFooter";




const Chanell = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setData(data.filter(data => data.albumId === 1)))
    },[data])

   const filtered = data.filter(data => data.id === 6)
    return (
      <>
        <Saidbar/>
        <div className="chanell-wrapper">
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
                <div className="chanell-wrapper__wrapper-chanel-img">
            <img src={ImgChanell} alt="rasm" />
        </div>
        <div className="chanell-wrapper__wrapper-main-title">
            <div className="wrapper-main-title__user-wrapper">
                  
                     <img className="user-wrapper__img-user" src={ChanellUser} alt="rasm" />
                <span>
                    <h3>Margaret Phelps</h3>
                    <p>245K subscribed</p>
                </span>
            </div>
            <div className="wrapper-main-title__btn-wrapper" >
                <img className="btn-wrapper__img-call" src={CallIcon} alt="rasm" />
                <button className="btn-wrapper__btn-Subscribe">Subscribe 2.3m</button>
            </div>
          </div>
          <div className="wrapper-main-title__wrapper-link" >
           
                  
              
            </div>
       
            <div className="scrol-wrapper">
                 <div className="chanell-wrapper__basic-wrapper">
                 <div className="basic-wrapper__wrapper-disc">
              <ul>
                        <li>
                             <NavLink to="/chanell" className="link-page" activeClassName="link-active" exact>Home</NavLink>
                        </li>
                        <li>
                             <NavLink  to="/chanell/a" className="link-page" activeClassName="link-active">Videos</NavLink>
                        </li>
                        <li>
                             <NavLink  to="/chanell/d" className="link-page" activeClassName="link-active">Playlists</NavLink>
                        </li>
                        <li>
                             <NavLink  to="/chanell/f" className="link-page" activeClassName="link-active">Channels</NavLink>
                        </li>
                        <li>     
                              <NavLink  to="/chanell/r" className="link-page" activeClassName="link-active">Discussion</NavLink>
                        </li>
                        <li>
                                <NavLink  to="/chanell/s" className="link-page" activeClassName="link-active">About</NavLink>
                        </li>
                        <li>
                                <img src={ImgSearch} alt="rasm" />
                        </li>
                           
                      
                    </ul>
                    {filtered.map(data => (
                      <ChanellVideo  key={data.id} video={data.url}  />
                ))}
              </div>
              <div className="basic-wrapper__wrapper-user">
                  <span>Recommended channel</span>
                  <ul className="list-chanell-user">
                      <li className="item-chanel-user">
                          <img src={UserChanell} alt="rasm" />
                          <p>Flora Benson</p>
                      </li>
                      <li className="item-chanel-user">
                          <img src={UserChanell2} alt="rasm" />
                          <p>Violet Cobb</p>
                      </li>
                      <li className="item-chanel-user">
                          <img src={UserChanell3} alt="rasm" />
                          <p>Phillip Mullins</p>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="chanell-wrapper__wrapper-main">
                    <h3>Recommended</h3>
                    <span className="wrapper-main__wrapper-scrol-btn">
                        <button className="scrol-btn">  <img className="wrapper-scrol-btn__img-left" src={Imgleft} alt="rasm" /></button>
                        <button className="scrol-btn" >  <img className="wrapper-scrol-btn__img-right"src={ImgRight} alt="rasm" /></button>
                    </span>
             </div>
             <ul className="chanell-list__chanell-footer-video">
                       {data.map(data => (
                            <ChanellVideoFooter key={data.id} dataImg={data.url} dataTitle={data.title} />
                       ))}
        </ul>
        </div>
      
    </div>
         
      </>
    );
};



export default Chanell;