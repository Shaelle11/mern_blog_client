import React from "react";
import './Post.css';
import { formatISO9075} from "date-fns";
import { Link } from "react-router-dom";

export default function Post({_id, title, summary, cover, content, createdAt, author}){
    const url = 'http://localhost:4000/'
    return(
        <div className="postcard">
            <div className="postimg">
             <Link className="postlink" to={`/post/${_id}`}>
             <img src={url + cover} alt="blog image"/>
             </Link>
            </div>
            <div className="posttext">
            <time>{formatISO9075(new Date(createdAt))}</time>
<Link className="postlink" to={`/post/${_id}`}>
<h1 className="posttitle">
 {title}
</h1>
</Link>
<p className="postdesc">{summary}</p>
<span className="author"><h4>{author.username}</h4> </span>
                
            </div>  
        </div>
    )
}