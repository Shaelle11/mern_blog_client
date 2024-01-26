import React, { useEffect, useState } from "react";
import Post from "../../Components/Post/Post";

export default function Home(){
    const [posts, setPosts] = useState([]);
    const url = `${process.env.REACT_APP_API_URL}/post`
    useEffect(() => {
     fetch(url).then(response => {
        response.json().then(posts => {
           setPosts(posts);
        });
     })
    })
    return(
        <main>
          {posts.length> 0 && posts.map(post => (
            <Post {...post}/>
          ))}
        </main>
    )
}