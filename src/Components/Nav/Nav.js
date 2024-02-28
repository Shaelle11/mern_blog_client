import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo.svg';
import "./Nav.css"
import { UserContext } from "../../Pages/UserContext/UserContext";

export default function Nav() {
const {setUserInfo, userInfo} = useContext(UserContext);
const url = 'http://localhost:4000/profile'
    useEffect(() => {
        fetch(url, {
            credentials:'include'
        }).then(response =>{
response.json().then(userInfo => {
setUserInfo(userInfo);
})
        })
    }, []);
    function Logout(){
        const url = 'http://localhost:4000/logout'
        fetch(url, {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;
    return(
        <header>
<Link to="/">
<img src={logo}  alt="Logo" className="logo" />
</Link>
<nav>
    {username && (
        <>
        <h1>Welome back {username}</h1>
        <Link className="link Register" to="/create">Create new Post</Link>
        <a className=" link login" onClick={Logout}> Logout</a>
        </>
    )}
    {!username && (
        <>
<Link className="link">
      About
    </Link>
    <Link className="link">
       Contacts
    </Link>  
  <Link className="link login" to="/Login">
        Login
    </Link>
    <Link className="link Register" to="/Register">
        Register
    </Link>
    </>
    )}
</nav>
        </header>
    )
}