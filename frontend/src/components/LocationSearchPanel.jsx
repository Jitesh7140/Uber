// src/components/LocationSearchPanel.jsx
import React from 'react'
import { MapPin } from 'lucide-react'; 

// confirmLocation ki jagah setVehiclePanelOpen use karein
const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen }) => { 

    const locations = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "22C, Near Sharma's point, Sheryians Coding School, Bhopal",
        "10A, Near Malviya Nagar, Sheryians Coding School, Bhopal",
        "18D, Near Indra Nagar, Sheryians Coding School, Bhopal"
    ]

    return (
        <div className='p-0'>
            {
                locations.map((elem, idx) => {
                    return (
                        <div 
                            key={idx} 
                            onClick={() => {
                                setPanelOpen(false); // 1. Location list band karo
                                setVehiclePanelOpen(true); // 2. Vehicle Panel open karo
                            }} 
                            className='flex gap-3 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-3 cursor-pointer'
                        >
                            <h2 className='bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full shrink-0'>
                                <MapPin size={18}/>
                            </h2>
                            <h4 className='font-medium text-sm md:text-base grow'>{elem}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LocationSearchPanel