import React, { useState } from "react";
import { motion } from "framer-motion";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehicleSelectionPanel from "../components/VehicleSelectionPanel";
import { ArrowDown } from "lucide-react";

function Home() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setPanelOpen(false);
    setVehiclePanelOpen(true);
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gray-200">
      {/* 1. Map Background */}
      <div className="h-screen w-screen absolute top-0 z-0">
        <img
          className="h-full w-full object-cover"
          src="https://img.freepik.com/premium-vector/destinations-gps-tracking-map-track-navigation-pin-street-maps-navigate-mapping-locate-position_753943-584.jpg?w=1060"
          alt="Map"
        />
      </div>

      {/* 2. Overlay Layer (Click outside to close panels) */}
      {(panelOpen || vehiclePanelOpen) && (
        <div
          onClick={() => {
            setPanelOpen(false);
            setVehiclePanelOpen(false);
          }}
          className="absolute inset-0 bg-black/50 z-10"
        ></div>
      )}

      {/* 3. Logo (Only visible when panels are closed) */}
      {!panelOpen && !vehiclePanelOpen && (
        <div className="absolute top-5 left-5 z-20">
          <h1 className="text-3xl font-bold text-black">Uber</h1>
        </div>
      )}

      {/* --- PANEL 1: Location Search --- */}
      <motion.div
        className="absolute bottom-0 w-full bg-white z-20 rounded-t-3xl p-6 overflow-hidden"
        animate={{ height: panelOpen ? "100%" : "30%" }}
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
          <form onSubmit={submitHandler}>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 outline-none"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3 outline-none"
              type="text"
              placeholder="Enter your destination"
            />

            {panelOpen && (
              <button className="bg-black text-white px-4 py-2 mt-5 rounded-lg w-full text-lg">
                Find Trip
              </button>
            )}
          </form>
          {/* // ... (inside your Home component return) */}
          {panelOpen && (
            <div className="mt-5 rounded-xl grow overflow-y-auto">
              <LocationSearchPanel
                setPanelOpen={setPanelOpen}
                setVehiclePanelOpen={setVehiclePanelOpen} // Yahan prop pass karna hai
              />
            </div>
          )}
          
        </div>
      </motion.div>

      {/* --- PANEL 2: Vehicle Selection --- */}
      <motion.div
        className="absolute bottom-0 w-full bg-white z-30 rounded-t-3xl p-6 h-[75%] shadow-2xl"
        initial={{ y: "100%" }}
        animate={{ y: vehiclePanelOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <VehicleSelectionPanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setPanelOpen={setPanelOpen}
        />
      </motion.div>
    </div>
  );
}

export default Home;
