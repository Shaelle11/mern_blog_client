import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreatePost.css';
import { useReducer, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ]
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState("");
  const inputFileRef = useRef(null);

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', inputFileRef.current.files[0]); // Use it here

    const url = 'https://mern-blog-server-psi.vercel.app/post';

    const response = await fetch(url, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    if (response.ok) {
      setRedirect(true);
    }

    // Rest of your code...
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <form onSubmit={createNewPost}>
        <input type="title" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)} />
        <input type="summary" placeholder={'Summary'} value={summary} onChange={ev => setSummary(ev.target.value)} />
        <input type="file" ref={inputFileRef} />
        <ReactQuill className='quill' value={content} onChange={newValue => setContent(newValue)} module={modules} formats={formats} />
        <button style={{ marginTop: '3.5rem' }}>Create Post </button>
      </form>
    </>
  );
}
