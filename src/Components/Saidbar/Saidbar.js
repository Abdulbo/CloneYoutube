import "./Saidbar.scss"
import { NavLink } from "react-router-dom";

//Icons
import Gamburgericons from "../../Assets/img/gamburger.png";
import YouTubeIcon from "../../Assets/img/youtube-icon.png";
import YouTubeTextIcons from "../../Assets/img/youtube-text.png";
import HomeIcons from "../../Assets/img/Combined-Shape.png";
import TrendingIcons from "../../Assets/img/olov.png";
import SubsicIcon from "../../Assets/img/Combined.png";
import FileIcon from "../../Assets/img/4-rasm.png";
import HistoryIcon from "../../Assets/img/5-rasm.png";
import WatchIcon from "../../Assets/img/6-rasm.png";
import StarIcon from "../../Assets/img/Star-7.png";
import LikeIcon from "../../Assets/img/8-rasm.png";
import MusicIcon from "../../Assets/img/9-rasm.png";
import PlyIcon from "../../Assets/img/pult-ply.png";
import ArrowIcon from "../../Assets/img/strelka-past.png";
import User1Img from "../../Assets/img/Oval.png";
import User2Img from "../../Assets/img/oval-2.png";
import User3Img from "../../Assets/img/Oval-3.png";
import User4Img from "../../Assets/img/Oval-4.png";
import User5Img from "../../Assets/img/Oval-5.png";
import User6Img from "../../Assets/img/Oval-6.png";
import SettingIcon from "../../Assets/img/setting-icon.png";



const Saidbar = () => {
    return (
        <div className="saidbar">
            <span className="saidbar__wrapper-menu">
                <img src={Gamburgericons} alt="icon" />
                    <span className="wrapper-menu__brend-wrapper">
                        <img className="brend-wrapper__img-icon" src={YouTubeIcon} alt="icon" />
                        <img  src={YouTubeTextIcons} alt="icon" />
                    </span>
            </span>
            <div className="saidbar__wrapper-scrol">
                <ul className="saidbar__list">
               <li  className="saidbar__item">
                 <NavLink className="item__link" to="/" activeClassName="item__link-red" exact>
                        <img src={HomeIcons} alt="icon" />
                        <p>Home</p>
                  </NavLink>
               </li>
               <li  className="saidbar__item">
                 <NavLink className="item__link" to="/1" activeClassName="item__link-red" >
                        <img src={TrendingIcons} alt="icon" />
                        <p>Trending</p>
                  </NavLink>
               </li>
               <li className="saidbar__item ">
                 <NavLink className="item__link" to="/s" activeClassName="item__link-red">
                        <img src={SubsicIcon} alt="icon" />
                        <p>Subscriptions</p>
                  </NavLink>
               </li>
            </ul>
            <ul className="saidbar__list2">

               <li className="saidbar__item2">
                   <NavLink className="item__link2" to="/r" activeClassName="item__link-red2">
                            <img src={FileIcon} alt="icon" />
                            <p>Library</p>
                    </NavLink>
               </li>
               <li className="saidbar__item2">
                   <NavLink className="item__link2" to="/w" activeClassName="item__link-red2">
                            <img src={HistoryIcon} alt="icon" />
                            <p>History</p>
                    </NavLink>
               </li>
               <li className="saidbar__item2">
                   <NavLink className="item__link2" to="/p" activeClassName="item__link-red2">
                            <img src={WatchIcon} alt="icon" />
                            <p>Watch later</p>
                    </NavLink>
               </li>
               <li className="saidbar__item2">
                   <NavLink className="item__link2" to="/o" activeClassName="item__link-red2">
                            <img src={StarIcon} alt="icon" />
                            <p>Favourites</p>
                    </NavLink>
               </li>
               <li className="saidbar__item2">
                   <NavLink className="item__link2" to="/m" activeClassName="item__link-red2">
                            <img src={LikeIcon} alt="icon" />
                            <p>Liked videos</p>
                    </NavLink>
               </li>
               <li  className="saidbar__item2">
                   <NavLink className="item__link2" to="/l" activeClassName="item__link-red2">
                            <img src={MusicIcon} alt="icon" />
                            <p>Music</p>
                    </NavLink>
               </li>
               <li className="saidbar__item2">
                   <NavLink className="item__link2" to="/k" activeClassName="item__link-red2">
                            <img src={PlyIcon} alt="icon" />
                            <p>Games</p>
                    </NavLink>
               </li>
               <li className="saidbar__item2">
                   <NavLink className="item__link2" to="/q" activeClassName="item__link-red2">
                            <img src={ArrowIcon} alt="icon" />
                            <p>Show more</p>
                    </NavLink>
               </li>
            </ul>
            <h3 className="user-Title">Subscriptions</h3>
            <ul className="user-List">
                <li key={12} className="user-List__item">
                    <NavLink to="/chanell" className="item__user-link" activeClassName="item__user-link-red">
                        <img src={User1Img} alt="userImg" />
                        <p>Gussie Singleton</p>
                    </NavLink>
                </li>
                <li  className="user-List__item">
                    <NavLink to="/chanell" className="item__user-link" activeClassName="item__user-link-red">
                        <img src={User2Img} alt="userImg" />
                        <p>Nora Francis</p>
                    </NavLink>
                </li>
                <li className="user-List__item">
                    <NavLink to="/chanell" className="item__user-link" activeClassName="item__user-link-red">
                        <img src={User3Img} alt="userImg" />
                        <p>Belle Briggs</p>
                    </NavLink>
                </li>
                <li className="user-List__item">
                    <NavLink to="/chanell" className="item__user-link" activeClassName="item__user-link-red">
                        <img src={User4Img} alt="userImg" />
                        <p>Eunice Cortez</p>
                    </NavLink>
                </li>
                <li className="user-List__item">
                    <NavLink to="/chanell" className="item__user-link" activeClassName="item__user-link-red">
                        <img src={User5Img} alt="userImg" />
                        <p>Gussie Singleton</p>
                    </NavLink>
                </li>
                <li  className="user-List__item">
                    <NavLink to="/chanell" className="item__user-link" activeClassName="item__user-link-red">
                        <img src={User6Img} alt="userImg" />
                        <p>Emma Hanson</p>
                    </NavLink>
                </li>
            </ul>
                <span className="setting-wrapper">
                    <img className="setting-wrapper__icon" src={SettingIcon} alt="icon" />
                    <p>Setting</p>
                </span>
          </div>
        </div>
    );
};



export default Saidbar;