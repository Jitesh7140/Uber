import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  // Accessing context (assuming your provider is set up)
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType,
      },
    };

    try {
       const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/captain/register`,
      newCaptain,
      { withCredentials: true },
    );

    if (res.status === 201) {
      setCaptain(res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/captain-home"); 

      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");
    } else {
      navigate('/captain-register')
    }
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      navigate("/captain-register");


    }


  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#292D3E] p-4 font-sans">
      {/* Container: 
        - max-h-[90vh] keeps it from touching the screen edges.
        - overflow-y-auto ensures the content scrolls if it's too long.
      */}
      <div className="relative w-full max-w-sm max-h-[90vh] bg-white shadow-xl rounded-2xl overflow-y-auto p-8 flex flex-col">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Uber</h1>
        </div>

        {/* Registration Form */}
        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          {/* Name Section */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Captain's name
            </h2>
            <div className="flex gap-2">
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 bg-gray-100 rounded-md px-4 py-2 border border-gray-200 outline-none focus:border-black"
                type="text"
                placeholder="First name"
              />
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 bg-gray-100 rounded-md px-4 py-2 border border-gray-200 outline-none focus:border-black"
                type="text"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* Email Section */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Enter email
            </h2>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 rounded-md px-4 py-2 border border-gray-200 outline-none focus:border-black"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          {/* Password Section */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Enter Password
            </h2>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 rounded-md px-4 py-2 border border-gray-200 outline-none focus:border-black"
              type="password"
              placeholder="password"
            />
          </div>

          {/* Vehicle Section */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Vehicle Information
            </h2>
            <div className="flex gap-2 mb-2">
              <input
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="w-1/2 bg-gray-100 rounded-md px-4 py-2 border border-gray-200 outline-none focus:border-black"
                type="text"
                placeholder="Vehicle Color"
              />
              <input
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="w-1/2 bg-gray-100 rounded-md px-4 py-2 border border-gray-200 outline-none focus:border-black"
                type="text"
                placeholder="Vehicle Plate"
              />
            </div>
            <div className="flex gap-2">
              <input
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="w-1/2 bg-gray-100 rounded-md px-4 py-2 border border-gray-200 outline-none focus:border-black"
                type="number"
                placeholder="Capacity"
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-1/2 bg-gray-100 rounded-md px-4 py-2 border border-gray-200 outline-none focus:border-black"
              >
                <option value="" disabled>
                  Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-black text-white font-medium py-3 rounded-lg mt-2 active:scale-[0.98] transition">
            Register
          </button>
        </form>

        {/* Footer Area */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600 font-medium">
              Login here
            </Link>
          </p>
          <p className="text-[11px] text-gray-500 leading-tight mt-4 text-center">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Uber and its affiliates to the
            number provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
