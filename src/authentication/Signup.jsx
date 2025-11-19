import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.config';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);

 const HandleSignin = async (e) => {
  e.preventDefault();
 try{
  await createUserWithEmailAndPassword(auth, email, password);
  console.log("signed up");
 }catch(err){
  setError(err.code);
 }
};

  return (
    <div className='pt-22 pb-24 bg-neutral-100 min-h-screen'>
      <form className='max-w-md m-auto pt-24 bg-gray-50 rounded-2xl' onSubmit={HandleSignin}>
        <h2 className='font-bold text-center text-3xl'>SIGN IN</h2>
        <div className='flex flex-col p-5  py-4 rounded-2xl'>
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type='submit' disabled={loading} className='mt-6 p-2 w-full shadow-xl bg-orange-500 text-white rounded-2xl'>Sign in</button>
          <p className='text-center'>Already have an account? <Link to="/login">Log In</Link>
        </p>
        </div>
      </form>
    </div>
  )
}

export default Signup;
