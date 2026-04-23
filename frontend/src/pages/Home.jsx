import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LocationSearchPanel from '../components/LocationSearchPanel';
import { ChevronDown, ArrowDown } from 'lucide-react';

function Home() {
  const [panelOpen, setPanelOpen] = useState(false);
  // Input states
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pickup:", pickup, "Destination:", destination);
    // Yahan tum API call kar sakte ho ya ride search kar sakte ho
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gray-200">
      
      {!panelOpen && (
        <div className="absolute top-5 left-5 z-20">
          <h1 className="text-3xl font-bold text-black">Uber</h1>
        </div>
      )}

      <div className="h-screen w-screen absolute top-0 z-0">
        <img 
          className="h-full w-full object-cover" 
          src="https://img.freepik.com/premium-vector/destinations-gps-tracking-map-track-navigation-pin-street-maps-navigate-mapping-locate-position_753943-584.jpg?w=1060" 
          alt="Map" 
        />
      </div>

      <motion.div 
        className="absolute bottom-0 w-full bg-white z-10 rounded-t-3xl p-6 overflow-hidden"
        animate={{ height: panelOpen ? '100%' : '30%' }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex flex-col relative h-full">
          {panelOpen && (
            <button 
              onClick={() => setPanelOpen(false)}
              className="text-2xl font-bold mb-5 self-start"
            >
               <ArrowDown />
            </button>
          )}

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          
          {/* Form wrapper */}
          <form onSubmit={(e) => submitHandler(e)}>
            <input 
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5" 
              type="text" 
              placeholder="Add a pick-up location" 
            />
            <input 
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3" 
              type="text" 
              placeholder="Enter your destination" 
            />
            
            {/* Submit Button - Yeh sirf tab dikhega jab panel open ho */}
            {panelOpen && (
              <button className="bg-black text-white px-4 py-2 mt-5 rounded-lg w-full text-lg">
                Find Trip
              </button>
            )}
          </form>

          {panelOpen && (
            <div className="mt-5 p-4 bg-gray-100 rounded-xl  grow">
                
                <LocationSearchPanel/>
               
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;