import React, { useEffect, useState } from "react";
import Post from "../../Components/Post/Post";
import PostCarousel from "../../Components/PostCarousel/PostCarousel";
import "./Home.css"

export default function Home(){
  const [currentSlide, setCurrentSlide] = useState([]);
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  
  const url = 'http://localhost:4000/post';

  useEffect(() => {
fetch(url).then(response =>{
  response.json().then(currentSlide => {
const lastIndex = currentSlide.length - 1;
if(index < 0){
  setCurrentSlide(lastIndex);
}
if(index > lastIndex){
  setCurrentSlide(0);
} 
  }, [index, currentSlide])
})
  })
 
  useEffect(() => {
    let slider = setInterval(()=>{
      setIndex(index + 1)
    }, 5000)
  }, [index])
    useEffect(() => {
     fetch(url).then(response => {
        response.json().then(posts => {
           setPosts(posts);
        });
     })
    })
    return(
        <main className="home">
          {currentSlide.length> 0 && currentSlide.map(current =>(
            <PostCarousel {...current}/>
          ) )}
          {posts.length> 0 && posts.map(post => (
            <Post {...post}/>
          ))}
        </main>
    )
}