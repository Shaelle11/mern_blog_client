import React, { useState } from "react";
import './Register.css';

export default function Register(){
    const [username, setIsUsername] = useState("");
    const [password, setIsPassword] = useState("");
    const [email, setIsEmail] = useState("");
   async function Register(ev){
ev.preventDefault();
const response = await fetch('http://localhost:4000/register', {
    method: 'POST',
    body: JSON.stringify({username, email, password}),
    headers:{"Content-Type": 'application/json'},
});
if (response.status === 200){
    alert('registration successful');
} else{
alert('Registration failedl');
}
    }
    
    return(
                <form onSubmit={Register}>
                    <h1 className="title">Sign Up</h1>
        <input type="text" placeholder="Username" value={username} onChange={ev => setIsUsername(ev.target.value)}/>
        <input type="email" placeholder="email" value={email} onChange={ev => setIsEmail(ev.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={ev=> setIsPassword(ev.target.value)}/>
        <button>Sign Up</button>
                </form>
            
        
    )
}