import React from 'react';
import { MapPin, MapPinHouse, Square, ArrowLeft } from 'lucide-react'; 
import carImg from "../assets/car_Img.png"

const LookingForDriver = ({ setLookingForDriverOpen, setVehiclePanelOpen }) => {
    return (
        <div className='flex flex-col relative h-full'>
            
            {/* Header: Back, Title, and Close */}
            <div className='flex items-center justify-between relative py-2'>
                {/* Back Button */}
                <ArrowLeft 
                    onClick={() => {
                        setLookingForDriverOpen(false); 
                        setVehiclePanelOpen(true); // Wapas Vehicle Panel par le jayega
                    }}
                    className='text-2xl text-gray-600 cursor-pointer'
                />
                
                <h3 className='text-xl font-semibold'>Looking for nearby drivers</h3>

                {/* Close Button */}
                <i 
                  onClick={() => setLookingForDriverOpen(false)} 
                  className="ri-arrow-down-s-line text-3xl text-gray-400 cursor-pointer"
                ></i>
            </div>

            {/* Blue Loading/Divider line */}
            <div className='w-full h-1 bg-blue-500 rounded-full mt-2 mb-4'></div>

            {/* Car Image */}
            <div className='flex justify-center items-center py-5'>
                <div className='relative w-1/2'>
                    <img src={carImg} alt="UberGo" className='w-full' />
                    <div className='absolute bottom-0 left-0 w-full h-6 bg-blue-100 rounded-full blur-[3px] -z-10'></div>
                </div>
            </div>

            {/* Details Section */}
            <div className='grow overflow-y-auto px-1 mt-3'>
                <div className='flex items-start gap-4 py-4 border-b border-gray-100'>
                    <div className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full shrink-0'>
                        <MapPinHouse size={20} className='text-gray-800'/>
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold'>562/11-A</h4>
                        <p className='text-sm text-gray-700'>Kaikondrahalli, Bengaluru, Karnataka</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 py-4'>
                    <div className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full shrink-0'>
                        <Square size={16} className='text-gray-800'/>
                    </div>
                    <div className='grow'>
                        <h4 className='text-lg font-semibold'>Third Wave Coffee</h4>
                        <p className='text-sm text-gray-700'>
                           17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookingForDriver;