import React, { useRef, useState } from 'react';
import { checkValidateForm } from '../utils/isValidate';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name=useRef(null);
    const email =useRef(null);
    const password =useRef(null);
    const handleButtonClick =()=>{
      //Validating the Form
      
        const message=  checkValidateForm(email.current.value,password.current.value,name.current.value)
        setErrorMessage(message);

    //Upon Successful Validation performing Sign In / Sign Up


    }

    const toggleSignInForm = ()=>{
        
        setSignInForm(!isSignInForm)
    }
  return (
   <>
   <Header/>
   <div className='absolute'>
   <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='logo'/> 
   </div>
   <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 p-12  my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In':'Sign Up'}</h1>
    {!isSignInForm && (<input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700'/>)}
    <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
    <input  ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
    <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
    <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700  w-full rounded-lg'  > {isSignInForm ? 'Sign In':'Sign Up'}</button>

    <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now.':'Already registered. Sign In Now.'}</p>

   </form>
   </>
  )
}

export default Login