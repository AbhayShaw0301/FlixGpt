import { signOut } from "firebase/auth";
import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { auth } from '../utils/firebase';
const Header = () => {
  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate('/')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  return (
  <div className='absolute py-2 px-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
  <img className='w-44 ' src={logo} alt='logo'/>
  {user && (<div className='flex'>
    <img className='w-12 h-12 my-2 mx-2' src={user.photoURL} alt='userLogo'/>
    <button className='font-bond text-white' onClick={handleSignOut}>Sign Out</button>
  </div>)}
  
  </div>
  )
}

export default Header