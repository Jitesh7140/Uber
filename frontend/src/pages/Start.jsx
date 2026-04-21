import React from "react";
import img from "../assets/HomePagePhoto.jpg";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#292D3E] font-sans">
      {/* Mobile Screen Container */}
      <div className="relative aspect-9/16 h-[90vh] w-full max-w-sm rounded-3xl bg-white shadow-2xl overflow-hidden flex flex-col">
        {/* Top Part: Image aur Uber Logo ka container */}
        <div className="relative grow w-full">
          {/* Uber Logo (Absolute position se image ke upar aa jayega) */}
          <h1 className="absolute top-6 left-6 z-10 text-4xl font-extrabold text-black">
            Uber
          </h1>

          {/* Full Image */}
          <img
            src={img}
            alt="Uber Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Part: Text aur Button */}
        <div className="bg-white p-6 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
          <p className="text-2xl font-semibold text-black leading-tight mb-4">
            Get started with Uber
          </p>

          <Link
            to="/login"
            className="flex w-full items-center justify-between rounded-full bg-[#1A1F30] py-4 px-6 text-lg font-medium text-white shadow-md transition hover:bg-black active:scale-[0.98]"
          >
            <span className="flex-1 text-center font-bold">Continue</span>
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
