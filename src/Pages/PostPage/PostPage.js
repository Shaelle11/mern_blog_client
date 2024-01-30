import { formatISO9075 } from "date-fns";
import { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./PostPage.css";

export default function PostPage(){
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext); 
    const {id}= useParams();
    const url = `https://youten-studios-server.vercel.app/post/${id}`;
   
    useEffect (() => {
       fetch(url).then(response => {
        response.json().then(postInfo => {
        setPostInfo(postInfo);
        });
       });
    }, []);
    if(!postInfo) return '';

    return(
        <div className="postpage">
             <h1>{postInfo.title}</h1>
             <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
             <div className="author">
                by {postInfo.author.username}
             </div>
             {userInfo.id === postInfo.author._id && (
           <div className="edit-row">  
            <a className="edit-btn" href="">Edit this post</a>   
           </div>
             )}
       <div className="image">
       <img src={`https://youten-studios-server.vercel.app/${postInfo.cover}`} alt="post image"/>
       </div>

       <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
        </div>
    )
}