import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { changeLanguage } from "../utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { auth } from '../utils/firebase';
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}));
       navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/')
        
      }
      return ()=>unsubscribe()
    });

  },[]);
  const onToggleSearchClick=()=>{
    dispatch(toggleGptSearchView());
    

  }
  const toggleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
  <div className='absolute py-2 px-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
  <img className='w-44 ' src={logo} alt='logo'/>
  {user && (<div className='flex'>
  <select className='bg-gray-900 text-white text-xl m-2  p-2 rounded'onChange={toggleLanguageChange} >
  {
    SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
  }
 
    

  </select>

    <button className='bg-purple-800 text-white text-xl m-2  px-12  rounded' onClick={onToggleSearchClick}>Gpt Search</button>
    <img className='w-12 h-12 my-2 mx-2' src={user.photoURL} alt='userLogo'/>
    <button className='font-bond text-white' onClick={handleSignOut}>Sign Out</button>
  </div>)}
  
  </div>
  )
}

export default Header