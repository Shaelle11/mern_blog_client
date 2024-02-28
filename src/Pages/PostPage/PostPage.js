import { formatISO9075 } from "date-fns";
import { useState, useEffect, useContext } from "react";
import { Link, useParams, Navigate } from "react-router-dom"; // Import useHistory
import { UserContext } from "../UserContext/UserContext";
import "./PostPage.css";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const url = `http://localhost:4000/post/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((postInfo) => setPostInfo(postInfo));
  }, [url]);

  const handleDelete = async () => {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed (e.g., authorization headers)
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete post');
      }

      return <Navigate to={'/'}/>// Adjust the path as needed
    } catch (error) {
      console.error(error.message);
      // Handle error as needed (e.g., show an error message to the user)
    }
  };

  if (!postInfo) return '';

  return (
    <div className="postpage">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by {postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            Edit this post
          </Link>
          <button className="delete-btn" onClick={handleDelete}>
            Delete this post
          </button>
        </div>
      )}
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="post image" />
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
