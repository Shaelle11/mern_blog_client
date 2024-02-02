import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [redirect, setRedirect] = useState(false);

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

  const navigate = useNavigate();

  const createNewPost = async (ev) => {
    ev.preventDefault();

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', file);

    try {
      const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <>
      <form onSubmit={createNewPost}>
        <input type="title" placeholder={'Title'} value={title} onChange={(ev) => setTitle(ev.target.value)} />
        <input type="summary" placeholder={'Summary'} value={summary} onChange={(ev) => setSummary(ev.target.value)} />
        <input type="file" onChange={handleFileChange} />
        <ReactQuill className='quill' value={content} onChange={(newValue) => setContent(newValue)} modules={modules} formats={formats} />
        <button style={{ marginTop: '3.5rem' }}>Create Post</button>
      </form>
    </>
  );
};

export default CreatePost;
