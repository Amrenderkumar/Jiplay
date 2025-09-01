import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { userAuth } from "../context/AuthContext";


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

const {session} = userAuth();
console.log(session);

  return (
    <div className='pt-22 pb-24 '>
      <form className='max-w-md m-auto pt-24 bg-gray-100 rounded-2xl'>
        <img src="" alt="" />
        <h2 className='font-bold text-center text-3xl'>SIGN IN</h2>
        <div className='flex flex-col p-5  py-4 rounded-2xl'>
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="text" placeholder='Username' />
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="email" placeholder='Email' />
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="password" placeholder='Password' />
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="password" placeholder='Confirm Password' />
          <button type='submit' disabled={loading} className='mt-6 p-2 w-full shadow-xl bg-orange-500 text-white rounded-2xl'>Sign in</button>
          <p className='text-center'>Already have an account? <Link to="/login">Log In</Link>
        </p>
        </div>
      </form>
    </div>
  )
}

export default Signup;
