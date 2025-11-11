import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";  
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const auth = getAuth(app);
  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Logged in successfully!");
      navigate("/Dashboard");
    } catch (err) {
      console.error("❌ Login error:", err);
      setError(err.code);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-40 pb-24 bg-neutral-100 min-h-screen">
      <form
        onSubmit={HandleLogin}
        className="max-w-md m-auto pt-24 bg-neutral-50 rounded-2xl"
      >
        <h2 className="font-bold pb-2 text-3xl text-center">LOG IN</h2>
        <div className="flex flex-col p-5 py-4 rounded-2xl">
          <input
            className="p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 mt-6 shadow-xl border-2 border-gray-700 focus:border-pink-600 text-black rounded-2xl"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-6 p-2 w-full shadow-xl bg-orange-500 text-white rounded-2xl"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
          <p className="text-center">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
