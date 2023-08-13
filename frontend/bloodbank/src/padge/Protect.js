import React from "react";
import {Outlet,Navigate} from 'react-router-dom';
import Profile from "./Profile";
import Cookies from 'universal-cookie';
import axios from "axios";
 
 
const cookies = new Cookies();



const  auth = () =>{
   
  // const hashtoken = JSON.parse( localStorage.getItem('auth'));
  const hashtoken =  cookies.get('auth' ) 
 
    return hashtoken;
}


const Protect = () =>{

    const isauth = auth();

    return isauth ? <Outlet/> : <Navigate to='/login'/>

}

export default Protect;