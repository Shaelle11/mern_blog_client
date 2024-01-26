import React from "react";
import Image from "../../Images/logo.svg"
import './Post.css';
import { formatISO9075} from "date-fns";

export default function Post({title, summary, cover, content, createdAt, author}){
    const url = `${process.env.REACT_APP_API_URL}/`
    return(
        <div className="postcard">
            <div className="postimg">
                <img src={url + cover} alt="blog image"/>
            </div>
            <div className="posttext">
<h1 className="posttitle">
 {title}
</h1>
                <div className="postinfo">
                    <span className="author">by <h4>{author.username}</h4> </span>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </div>
                <p className="postdesc">{summary}</p>
            </div>  
        </div>
    )
}