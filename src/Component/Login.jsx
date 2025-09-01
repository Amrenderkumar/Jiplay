import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { userAuth } from "../context/AuthContext";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

const {session} = userAuth();
console.log(session);

  return (
    <div className='pt-40 pb-24'>
      <form className='max-w-md m-auto pt-24 bg-neutral-50 rounded-2xl'>
        <h2 className='font-bold pb-2 text-3xl text-center'>LOG IN</h2>
        <div className='flex flex-col p-5  py-4 rounded-2xl'>
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="email" placeholder='Email' />
          <input className='p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl' type="password" placeholder='Password' />
          <button type='submit' disabled={loading} className='mt-6 p-2 w-full shadow-xl bg-orange-500 text-white rounded-2xl'>Log In</button>
           <p className='text-center'>Don't have an account? <Link to="/signup">Sign In</Link>
        </p>
        </div>
      </form>
    </div>
  )
}

export default Login;
