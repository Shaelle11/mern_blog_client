import React from 'react';
import './App.css';
import Layout from './Components/Layout';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { UserContextProvider } from './Pages/UserContext/UserContent';
import CreatePost from './Pages/CreatePost/CreatePost';

function App() {
  return (
   <UserContextProvider>
 <Routes className="App">
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
     <Route path={'/Login'} element={ <Login />} />
   <Route path={'/Register'} element={<Register />} />
   <Route path='/create' element={<CreatePost/>}/>
      </Route>
    </Routes>
   </UserContextProvider>
 
  );
}

export default App;
