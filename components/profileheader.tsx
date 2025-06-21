"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfileHeader({ driverName, vehicleNumber }) {
    const router = useRouter();
    const [showProfile, setShowProfile] = useState(false);

    const handleLogout = () => {
        router.push('/driver');
    };

    return (
        <div className="flex justify-between items-center p-4 bg-[#F3F4F6] rounded-md shadow-md mb-4">
            <h2 className="font-bold text-lg">Welcome, {driverName}</h2>
            
            {/* Profile Icon */}
            <div className="relative">
                <Image
                    src="/profile.jpg"
                    alt="Profile Icon"
                    width={40}
                    height={40}
                    className="cursor-pointer rounded-full border-2 border-white shadow-md"
                    onClick={() => setShowProfile(!showProfile)}
                />

                {/* Profile Dropdown */}
                {showProfile && (
                    <div className="absolute top-12 right-0 bg-white p-3 rounded-md shadow-md w-52 text-left">
                        <h2 className="font-bold text-lg">{driverName}</h2>
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
    );
}
