import React from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

export default function Layout(){
 return(
    <main>
        <Nav/>
        <Outlet/>
    </main>
 )

}