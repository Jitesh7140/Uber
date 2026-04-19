import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData , setCaptainData] = useState({})

  const submitHandler = async (e) => {
    e.preventDefault();
    setCaptainData({
      email:email,
      password:password
    })

    console.log("captain Data:" , captainData)

    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#292D3E] p-4 font-sans">
      
      {/* Mobile Screen Container */}
      <div className="relative aspect-9/16 h-[90vh] w-full max-w-sm rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col p-8">
        
        {/* 1. Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">
            Uber
          </h1>
        </div>

        {/* 2. Login Form */}
        <form onSubmit={submitHandler} className=" grow flex flex-col space-y-5">
          
          <h2 className="text-xl font-semibold text-black">Login as Captain</h2>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 rounded-md px-4 py-3 border border-gray-200 outline-none focus:border-black" 
              type="email" 
              placeholder="email@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 rounded-md px-4 py-3 border border-gray-200 outline-none focus:border-black" 
              type="password" 
              placeholder="password"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-black text-white font-medium py-3 rounded-lg mt-2 active:scale-[0.98] transition">
            Login
          </button>
        </form>

        {/* 3. Bottom Action Area */}
        <div className="space-y-4 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-gray-600">
            Register as a Captain ? <Link to="/captain-register" className="text-blue-600 font-medium">New Captain Account</Link>
          </p>

          <Link 
            to="/login" 
            className="w-full bg-[#10b461] text-white font-medium py-3 rounded-lg flex items-center justify-center active:scale-[0.98] transition"
          >
            Sign in as User
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CaptainLogin;