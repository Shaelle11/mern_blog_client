import { formatISO9075 } from "date-fns";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

export default function PostPage(){
    const [postInfo, setPostInfo] = useState(null);
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
             <time>{formatISO9075}</time>
       <div className="image">
       <img src={`https://youten-studios-server.vercel.app/${postInfo.cover}`} alt="post image"/>
       </div>

       <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
        </div>
    )
}