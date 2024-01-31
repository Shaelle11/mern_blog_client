import React, { useEffect, useState } from "react";
import Post from "../../Components/Post/Post";
// import PostCarousel from "../../Components/PostCarousel/PostCarousel";
import "./Home.css"

export default function Home(){
  // const [currentSlide, setCurrentSlide] = useState([]);
  const [posts, setPosts] = useState([]);
  
  const url = 'https://mern-blog-server-psi.vercel.app/post';

//   useEffect(() => {
// fetch(url).then(response =>{
//   response.json().then(currentSlide => {
// setCurrentSlide(currentSlide);
//   } )
// })
//   })
 
    useEffect(() => {
     fetch(url).then(response => {
        response.json().then(posts => {
           setPosts(posts);
        });
     })
    })
    return(
        <main className="home">
          {/* {currentSlide.length> 0 && currentSlide.map(current =>(
            <PostCarousel {...current}/>
          ) )} */}
          {posts.length> 0 && posts.map(post => (
            <Post {...post}/>
          ))}
        </main>
    )
}