import React from 'react';
import { ArrowDown, User, ChevronDown } from 'lucide-react';
import carImg from "../assets/car_Img.png"
import BikeImg from "../assets/bike_Img.webp"
import AutoImg from "../assets/auto_Img.webp"

const VehicleSelectionPanel = ({ setVehiclePanelOpen }) => {

    const rides = [
        {
            id: 1,
            name: "UberGo",
            image: carImg,
            seats: 4,
            away: 2,
            time: "15:24",
            desc: "Affordable, compact rides",
            price: "₹193.20"
        },
        {
            id: 2,
            name: "Moto",
            image: BikeImg,
            seats: 1,
            away: 3,
            time: "15:24",
            desc: "Affordable motorcycle rides",
            price: "₹65.17"
        },
        {
            id: 3,
            name: "Auto",
            image: AutoImg,
            seats: 4,
            away: 4,
            time: "15:25",
            desc: "Comfortable sedans, top-quality drivers",
            price: "₹193.20"
        }
    ];

    return (
        <div className='flex flex-col relative h-full'>
            
            {/* Close/Back Button - Yeh panel ko band karne ke kaam aayega */}
            <h5 
                onClick={() => setVehiclePanelOpen(false)} 
                className='p-1 text-center w-[93%] absolute top-0 z-10 cursor-pointer'
            >
                <ArrowDown className='text-3xl text-gray-400' />
            </h5>

            <h3 className='text-2xl font-semibold mb-5 mt-8'>Choose a vehicle</h3>

            {/* Ride List */}
            <div className=' grow overflow-y-auto'>
                {rides.map(ride => (
                    <div 
                        key={ride.id} 
                        className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-4 cursor-pointer'
                    >
                        {/* Vehicle Image */}
                        <div className='w-20 shrink-0'>
                            <img src={ride.image} alt={ride.name} className='w-full' />
                        </div>

                        {/* Details */}
                        <div className=' grow'>
                            <div className='flex items-center gap-2'>
                                <h4 className='text-xl font-medium'>{ride.name}</h4>
                                <div className='flex items-center gap-1 text-gray-700'>
                                    <User size={16} />
                                    <span>{ride.seats}</span>
                                </div>
                            </div>
                            <div className='text-sm text-gray-700 font-medium'>
                                <span>{ride.away} mins away</span>
                                <span className='mx-1'>•</span>
                                <span>{ride.time}</span>
                            </div>
                            <p className='text-sm text-gray-600'>{ride.desc}</p>
                        </div>

                        {/* Price */}
                        <div className='shrink-0'>
                            <h4 className='text-xl font-semibold'>{ride.price}</h4>
                        </div>
                    </div>
                ))}
            </div>

           

        </div>
    );
};

export default VehicleSelectionPanel;