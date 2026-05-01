import React from "react";
import { MapPin, Square, Banknote, ChevronDown } from "lucide-react";
import carImg from "../assets/car_Img.png";

const ConfirmedRide = ({
  setConfirmedRideOpen,
  setVehiclePanelOpen,
  createRide,
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Handle Bar to close/drag down */}
      <div className="flex items-center justify-center py-2">
        <ChevronDown
          onClick={() => setConfirmedRideOpen(false)}
          className="text-gray-300"
          size={30}
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-5 px-4">Confirm your Ride</h3>

      {/* Car Image Display */}
      <div className="flex justify-center items-center mb-6">
        <img src={carImg} alt="Vehicle" className="h-28 object-contain" />
      </div>

      {/* Ride Details List */}
      <div className="w-full px-4 grow">
        {/* Pickup Location */}
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-100">
          <MapPin size={20} className="text-gray-600" />
          <div>
            <h4 className="text-lg font-bold text-gray-800">562/11-A</h4>
            <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
          </div>
        </div>

        {/* Destination Location */}
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-100">
          <MapPin size={20} className="text-red-300  " />
          <div>
            <h4 className="text-lg font-bold text-gray-800">562/11-A</h4>
            <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
          </div>
        </div>

        {/* Price and Payment Method */}
        <div className="flex items-center gap-5 p-3">
          <Banknote size={20} className="text-gray-800" />
          <div>
            <h4 className="text-lg font-bold text-gray-800">₹193.20</h4>
            <p className="text-sm text-gray-500">Cash Cash</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4">
        <button
          onClick={() => {
            // Action logic here
            setConfirmedRideOpen(false);
            if (createRide) createRide();
          }}
          className="w-full bg-green-600 text-white font-bold py-3 rounded-lg text-lg active:bg-green-700 transition-colors"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
