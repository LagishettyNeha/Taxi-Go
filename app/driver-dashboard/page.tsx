
//original
// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// export default function DriverDashboard() {
//     const router = useRouter();

//     // Retrieve driver data from localStorage
//     const driverData = JSON.parse(localStorage.getItem('driverData') || '{}');
//     const { name, vehicleNumber, carname, carPhoto } = driverData;

//     const [showProfile, setShowProfile] = useState(false);
//     const [isAvailable, setIsAvailable] = useState(true);
//     const [earnings, setEarnings] = useState(520); // Sample earnings for today
//     const [hasRideRequest, setHasRideRequest] = useState(true); // Simulated ride request

//     // Logout function to clear localStorage and redirect to sign-in page
//     const handleLogout = () => {
//         localStorage.removeItem('driverData');
//         router.push('/');
//     };

//     // Toggle Availability Status
//     const toggleAvailability = () => {
//         setIsAvailable(!isAvailable);
//     };

//     // Footer Navigation Handlers
//     const handleEarningsClick = () => router.push('/driver-dashboard/earnings');
//     const handleTripHistoryClick = () => router.push('/driver/trip-history');
//     const handleSupportClick = () => router.push('/driver-dashboard/support');

//     return (
//         <div className="min-h-screen bg-[#E6E6FA] p-4 relative">
//             {/* Profile Section (Top Bar) */}
//             <div className="flex justify-center items-center p-4 bg-[#F3F4F6] rounded-md shadow-md mb-4">
//                 <h2 className="font-bold text-lg">Welcome, {name}</h2>
//                 <div className="relative ml-auto">
//                     <Image
//                         src="/profile.jpg"
//                         alt="Profile Icon"
//                         width={40}
//                         height={40}
//                         className="cursor-pointer rounded-full border-2 border-white shadow-md"
//                         onClick={() => setShowProfile(!showProfile)}
//                     />

//                     {showProfile && (
//                         <div className="absolute top-12 right-0 bg-white p-3 rounded-md shadow-md w-52 text-left">
//                             <h2 className="font-bold text-lg">{name}</h2>
//                             <p className="text-gray-500 text-sm">Vehicle: {vehicleNumber}</p>
//                             <hr className="my-2" />
//                             <button
//                                 onClick={handleLogout}
//                                 className="text-red-500 font-semibold cursor-pointer w-full text-left"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Notifications Section */}
//             <div className="bg-[#FFF5BA] p-4 rounded-md shadow-md text-center mb-4">
//                 <h2 className="font-bold text-lg">🔔 Notifications</h2>
//                 <p className="text-gray-600">You have 2 new ride requests!</p>
//             </div>

//             {/* Grid Layout for Organized Display */}
//             <div className="grid grid-cols-3 gap-4">
//                 {/* Earnings Section */}
//                 <div className="bg-[#F3F4F6] p-4 rounded-md shadow-md text-center">
//                     <h2 className="font-bold text-lg mb-2">Today’s Earnings</h2>
//                     <p className="text-green-500 text-xl font-bold">₹{earnings.toFixed(2)}</p>
//                 </div>

//                 {/* Availability Toggle */}
//                 <div className="bg-[#F3F4F6] p-4 rounded-md shadow-md text-center">
//                     <h2 className="font-bold text-lg mb-2">Availability Status</h2>
//                     <button
//                         onClick={toggleAvailability}
//                         className={`w-full py-2 rounded-md text-white font-semibold ${isAvailable ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
//                     >
//                         {isAvailable ? '🟢 Online' : '🔴 Offline'}
//                     </button>
//                 </div>

//                 {/* Car Info Section */}
//                 <div className="bg-[#F3F4F6] p-4 rounded-md shadow-md text-center">
//                     <h2 className="font-bold text-lg">Your Car Information</h2>
//                     {carPhoto && (
//                         <Image
//                             src={carPhoto}
//                             alt="Car Image"
//                             width={200}
//                             height={100}
//                             className="rounded-md mt-2 mx-auto"
//                         />
//                     )}
//                     <p className="text-gray-600">Car Name: {carname}</p>
//                     <p className="text-gray-600">Vehicle Number: {vehicleNumber}</p>
//                 </div>
//             </div>

//             {/* Bottom Navigation Bar */}
//             <div className="fixed bottom-0 w-full bg-[#F3F4F6] py-2 flex justify-around shadow-md">
//                 <button onClick={() => router.push('/driver-dashboard')} className="text-blue-500 font-bold">🏠 Home</button>
//                 <button onClick={handleEarningsClick} className="text-green-500 font-bold">💰 Earnings</button>
//                 <button onClick={handleTripHistoryClick} className="text-yellow-500 font-bold">🗂️ Trip History</button>
//                 <button onClick={handleSupportClick} className="text-red-500 font-bold">📞 Support</button>
//             </div>
//         </div>
//     );
// }




// pages/driver-dashboard.js
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CarsList from '@/components/data/CarsList';

export default function DriverDashboard() {
    const router = useRouter();
    const driverData = JSON.parse(localStorage.getItem('driverData') || '{}');
    const { name, vehicleNumber, carname, carPhoto } = driverData;

    const [showProfile, setShowProfile] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true);
    const [earnings, setEarnings] = useState(520);
    const [hasRideRequest, setHasRideRequest] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('driverData');
        router.push('/');
    };

    const toggleAvailability = () => {
        setIsAvailable(!isAvailable);
    };

    const handleEarningsClick = () => router.push('/driver-dashboard/earnings');
    const handleTripHistoryClick = () => router.push('/driver/trip-history');
    const handleSupportClick = () => router.push('/driver-dashboard/support');

    return (
        <div className="min-h-screen bg-[#E6E6FA] p-4 relative">
            {/* Profile Section (Top Bar) */}
            <div className="flex justify-center items-center p-4 bg-[#F3F4F6] rounded-md shadow-md mb-4">
                <h2 className="font-bold text-lg">Welcome, {name}</h2>
                <div className="relative ml-auto">
                    <Image
                        src="/profile.jpg"
                        alt="Profile Icon"
                        width={40}
                        height={40}
                        className="cursor-pointer rounded-full border-2 border-white shadow-md"
                        onClick={() => setShowProfile(!showProfile)}
                    />

                    {showProfile && (
                        <div className="absolute top-12 right-0 bg-white p-3 rounded-md shadow-md w-52 text-left">
                            <h2 className="font-bold text-lg">{name}</h2>
                            <p className="text-gray-500 text-sm">Vehicle: {vehicleNumber}</p>
                            <hr className="my-2" />
                            <button
                                onClick={handleLogout}
                                className="text-red-500 font-semibold cursor-pointer w-full text-left"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Notifications Section */}
            <div className="bg-[#FFF5BA] p-4 rounded-md shadow-md text-center mb-4">
                <h2 className="font-bold text-lg">🔔 Notifications</h2>
                <p className="text-gray-600">You have 2 new ride requests!</p>
            </div>

            {/* Grid Layout for Organized Display */}
            <div className="grid grid-cols-3 gap-4">
                {/* Earnings Section */}
                <div className="bg-[#F3F4F6] p-4 rounded-md shadow-md text-center">
                    <h2 className="font-bold text-lg mb-2">Today’s Earnings</h2>
                    <p className="text-green-500 text-xl font-bold">₹{earnings.toFixed(2)}</p>
                </div>

                {/* Availability Toggle */}
                <div className="bg-[#F3F4F6] p-4 rounded-md shadow-md text-center">
                    <h2 className="font-bold text-lg mb-2">Availability Status</h2>
                    <button
                        onClick={toggleAvailability}
                        className={`w-full py-2 rounded-md text-white font-semibold ${isAvailable ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                    >
                        {isAvailable ? '🟢 Online' : '🔴 Offline'}
                    </button>
                </div>

                {/* Car Info Section */}
                <div className="bg-[#F3F4F6] p-4 rounded-md shadow-md text-center">
                    <h2 className="font-bold text-lg">Your Car Information</h2>
                    {carPhoto && (
                        <Image
                            src={carPhoto}
                            alt="Car Image"
                            width={200}
                            height={100}
                            className="rounded-md mt-2 mx-auto"
                        />
                    )}
                    <p className="text-gray-600">Car Name: {carname}</p>
                    <p className="text-gray-600">Vehicle Number: {vehicleNumber}</p>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 w-full bg-[#F3F4F6] py-2 flex justify-around shadow-md">
                <button onClick={() => router.push('/driver-dashboard')} className="text-blue-500 font-bold">🏠 Home</button>
                <button onClick={handleEarningsClick} className="text-green-500 font-bold">💰 Earnings</button>
                <button onClick={handleTripHistoryClick} className="text-yellow-500 font-bold">🗂️ Trip History</button>
                <button onClick={handleSupportClick} className="text-red-500 font-bold">📞 Support</button>
            </div>
        </div>
    );
}