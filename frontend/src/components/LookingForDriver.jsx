import React from 'react'

export default function LookingForDriver() {
    return (
        <div className='flex flex-col relative h-full'>

            <h5
                onClick={() => setVehiclePanelOpen(false)}
                className='p-1 text-center w-[93%] absolute top-0 z-10 cursor-pointer'
            >
                <ArrowDown className='text-3xl text-gray-400' />
            </h5>

            <h3 className='text-2xl font-semibold mb-5 mt-8'>Choose a vehicle</h3>

            <div className=' grow overflow-y-auto'>
                {rides.map(ride => (
                    <div
                        key={ride.id}
                        // Modified onClick to call confirmRide handler
                        onClick={() => {
                            setVehiclePanelOpen(false); // Close this panel
                            confirmRide(); // Trigger looking for driver panel
                        }}
                        className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-4 cursor-pointer'
                    >
                        <div className='w-20 shrink-0'>
                            <img src={ride.image} alt={ride.name} className='w-full' />
                        </div>
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
                        <div className='shrink-0'>
                            <h4 className='text-xl font-semibold'>{ride.price}</h4>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    );
};
 