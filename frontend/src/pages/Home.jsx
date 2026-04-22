import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Home() {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gray-200">
      
      {/* Uber Logo - Fixed at Top Left */}
      {!panelOpen && (
        <div className="absolute top-5 left-5 z-20">
          <h1 className="text-3xl font-bold text-black">Uber</h1>
        </div>
      )}

      {/* Map Section */}
      <div className="h-screen w-screen absolute top-0 z-0">
        <img 
          className="h-full w-full object-cover" 
          src="https://img.freepik.com/premium-vector/destinations-gps-tracking-map-track-navigation-pin-street-maps-navigate-mapping-locate-position_753943-584.jpg?w=1060" 
          alt="Map" 
        />
      </div>

      {/* Expanding Panel (Bottom Sheet) */}
      <motion.div 
        className="absolute bottom-0 w-full bg-white z-10 rounded-t-3xl p-6 overflow-hidden"
        // Ye logic panel ki height expand karega
        animate={{ height: panelOpen ? '100%' : '30%' }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex flex-col relative h-full">
          {/* Back Button (Sirf tab dikhega jab panel open ho) */}
          {panelOpen && (
            <button 
              onClick={() => setPanelOpen(false)}
              className="text-2xl font-bold mb-5 self-start"
            >
              ←
            </button>
          )}

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          
          {/* Inputs - Click krte hi panel expand ho jayega */}
          <input 
            onClick={() => setPanelOpen(true)}
            className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5" 
            type="text" 
            placeholder="Add a pick-up location" 
          />
          <input 
            onClick={() => setPanelOpen(true)}
            className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3" 
            type="text" 
            placeholder="Enter your destination" 
          />

          {/* Conditional Content (Jab panel open ho tabhi dikhe) */}
          {panelOpen && (
            <div className="mt-5 p-4 bg-gray-100 rounded-xl flex-grow">
               <p className="text-gray-500">Recent locations...</p>
               {/* Yahan tumhari search results/history aayegi */}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;