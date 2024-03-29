import React, { useContext, useState } from "react";
import {Navigate} from "react-router-dom";
import './login.css';   
import { UserContext } from "../UserContext/UserContext";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);


    const url = 'http://localhost:4000/login'
   async function Login(ev){
        ev.preventDefault();
const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
});
if (response.ok){
    response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
    })
} else {
    alert('wrong credentials');
}
    }

    if(redirect){
        return <Navigate to={'/'} />    
    }
    return (
        
        <form action="" onSubmit={Login}>
            <h1 className="title">Sign In</h1>
<input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)}/>
<input type="password" placeholder="password" value={password} onChange={ev=> setPassword(ev.target.value)}/>
<button>Sign In</button>
        </form>
    )
}