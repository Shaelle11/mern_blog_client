import React from 'react';
import './App.css';
import Layout from './Components/Layout';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { UserContextProvider } from './Pages/UserContext/UserContext';
import CreatePost from './Pages/CreatePost/CreatePost';
import PostPage from './Pages/PostPage/PostPage';
import EditPost from './Pages/EditPost/EditPost';

function App() {
  return (
   <UserContextProvider>
 <Routes className="App">
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
     <Route path={'/Login'} element={ <Login />} />
   <Route path={'/Register'} element={<Register />} />
   <Route path='/create' element={<CreatePost/>}/>
   <Route path="/post/:id" element={<PostPage/>}/>
   <Route path='/edit/:id' element={<EditPost/>} />
      </Route> 
    </Routes>
   </UserContextProvider>
 
  );
}

export default App;
