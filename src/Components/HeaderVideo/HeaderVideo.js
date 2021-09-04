import "./HeaderVideo.scss";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";


const HeaderVideo = ({videoTitle,videoImg,id}) => {
    const [posts ,  setPosts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then((res) => res.json())
        .then( data => setPosts(data.filter(data => data.albumId === 5)))
    }, []);
    
    const clickedImg = (e) => posts.find(post => post.id === Number(e.currentTarget.dataset.id));
    
    return (
            <Link  to="/video" className="link-headr">
              
                <li className="wrapper-headerVideo">
                    <img className="img-video" src={videoImg} alt="rasm" data-id={id} 
                     onClick={clickedImg}
                     />
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