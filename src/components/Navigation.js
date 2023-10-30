import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
 const [isLoggedIn,setLoggedIn] = useState(false);
 const [isAdmin,setAdmin] = useState(false);
 useEffect(
  ()=>{
    if(sessionStorage.getItem("userId")){
      setLoggedIn(true);
    }

    if(sessionStorage.getItem("role")=="admin"){
      setAdmin(true);
    }
  },[isLoggedIn]
 )
 const logout=()=>{
  sessionStorage.clear();
  setLoggedIn(false);
 }
  return (
    <div>
      <ul>
        <li>
            <Link to="/getProducts">Products</Link>
        </li>
        <li>
            <Link to="/aboutus"> About Us</Link>
        </li>
        <li>
            <Link to="/contactus"> Contact Us </Link>
        </li>
        {isLoggedIn?isAdmin?
        <li >
            <Link to="/addProduct"> Add Product </Link>
        </li> : ' ':' '
        }
        { isLoggedIn?
        <li>
            <Link to="/" onClick={logout}> LogOut </Link>
        </li> : ' '
}
      </ul>
    </div>
  )
}
