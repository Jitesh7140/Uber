import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registeredData , setRegisteredData] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    setRegisteredData({
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    });

    console.log("Registered Data:" , registeredData);

    // Form fields reset karein
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
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

        {/* 2. Registration Form */}
        <form onSubmit={submitHandler} className="grow flex flex-col space-y-6">
          
          {/* What's your name section */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Captain's name</h2>
            <div className="flex space-x-3">
              <input 
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 bg-gray-100 rounded-md px-4 py-3 border border-gray-200 outline-none focus:border-black placeholder:text-gray-400" 
                type="text" 
                placeholder="First name"
              />
              <input 
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 bg-gray-100 rounded-md px-4 py-3 border border-gray-200 outline-none focus:border-black placeholder:text-gray-400" 
                type="text" 
                placeholder="Last name"
              />
            </div>
          </div>

          {/* What's your email section */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Enter email</h2>
            <input 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 rounded-md px-4 py-3 border border-gray-200 outline-none focus:border-black placeholder:text-gray-400" 
              type="email" 
              placeholder="email@example.com"
            />
          </div>

          {/* Enter Password section */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Enter Password</h2>
            <input 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 rounded-md px-4 py-3 border border-gray-200 outline-none focus:border-black placeholder:text-gray-400" 
              type="password" 
              placeholder="password"
            />
          </div>

          {/* Register Button (Image says 'Login', matching that text) */}
          <button className="w-full bg-black text-white font-medium py-3 rounded-lg mt-2 active:scale-[0.98] transition">
            Login
          </button>
        </form>

        {/* 3. Bottom Action Area */}
        <div className="pt-6 border-t border-gray-100 space-y-8">
          <p className="text-center text-sm text-gray-600">
            Already have a account? <Link to="/captain-login" className="text-blue-600 font-medium">Login here</Link>
          </p>

          <p className="text-[11px] text-gray-500 leading-tight">
            By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CaptainSignup;