
// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';

// export default function DriverSignInPage() {
//     const [email, setEmail] = useState("");
//     const [vehicleNumber, setVehicleNumber] = useState("");
//     const router = useRouter();

//     const handleDriverSignIn = async () => {
//         try {
//             const q = query(
//                 collection(db, "drivers"),
//                 where("email", "==", email),
//                 where("vehicleNumber", "==", vehicleNumber)
//             );

//             const querySnapshot = await getDocs(q);

//             if (!querySnapshot.empty) {
//                 const driverData = querySnapshot.docs[0].data();

//                 // Redirect to dashboard with driver data as query params
//                 router.push(`/driver-dashboard?name=${driverData.name}&email=${driverData.email}&vehicleNumber=${driverData.vehicleNumber}`);
//             } else {
//                 alert("No matching driver found. Please check your details.");
//             }

//         } catch (error: any) {
//             alert(`Error: ${error.message}`);
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//             <h1 className="text-3xl font-bold mb-4">Driver Sign-In</h1>

//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mb-2 px-4 py-2 border rounded-md w-64"
//             />

//             <input
//                 type="text"
//                 placeholder="Vehicle Number"
//                 value={vehicleNumber}
//                 onChange={(e) => setVehicleNumber(e.target.value)}
//                 className="mb-2 px-4 py-2 border rounded-md w-64"
//             />

//             <button
//                 onClick={handleDriverSignIn}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md w-64">
//                 Sign In
//             </button>
//         </div>
//     );
// }

// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { FaEnvelope, FaCar } from 'react-icons/fa';

// export default function DriverSignInPage() {
//     const [email, setEmail] = useState("");
//     const [vehicleNumber, setVehicleNumber] = useState("");
//     const router = useRouter();

//     const handleDriverSignIn = async () => {
//         try {
//             const q = query(
//                 collection(db, "drivers"),
//                 where("email", "==", email),
//                 where("vehicleNumber", "==", vehicleNumber)
//             );

//             const querySnapshot = await getDocs(q);

//             if (!querySnapshot.empty) {
//                 const driverData = querySnapshot.docs[0].data();
//                 router.push(`/driver-dashboard?name=${driverData.name}&email=${driverData.email}&vehicleNumber=${driverData.vehicleNumber}`);
//             } else {
//                 alert("No matching driver found. Please check your details.");
//             }

//         } catch (error:any) {
//             alert(`Error: ${error.message}`);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
//             <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
//                 <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">🚖 Driver Sign-In</h1>

//                 <div className="flex items-center border rounded-md px-3 py-2 mb-4 shadow-sm">
//                     <FaEnvelope className="text-gray-400 mr-2" />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full focus:outline-none"
//                     />
//                 </div>

//                 <div className="flex items-center border rounded-md px-3 py-2 mb-4 shadow-sm">
//                     <FaCar className="text-gray-400 mr-2" />
//                     <input
//                         type="text"
//                         placeholder="Vehicle Number"
//                         value={vehicleNumber}
//                         onChange={(e) => setVehicleNumber(e.target.value)}
//                         className="w-full focus:outline-none"
//                     />
//                 </div>

//                 <button
//                     onClick={handleDriverSignIn}
//                     className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white py-3 rounded-md shadow-md">
//                     🚀 Sign In
//                 </button>
//             </div>
//         </div>
//     );
// }

// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { FaEnvelope, FaCar } from 'react-icons/fa';

// export default function DriverSignInPage() {
//     const [email, setEmail] = useState("");
//     const [vehicleNumber, setVehicleNumber] = useState("");
//     const router = useRouter();

//     const handleDriverSignIn = async () => {
//         try {
//             const q = query(
//                 collection(db, "drivers"),
//                 where("email", "==", email),
//                 where("vehicleNumber", "==", vehicleNumber)
//             );

//             const querySnapshot = await getDocs(q);

//             if (!querySnapshot.empty) {
//                 const driverData = querySnapshot.docs[0].data();
//                 // Store driver data in localStorage
//                 localStorage.setItem('driverData', JSON.stringify(driverData));
//                 router.push('/driver-dashboard'); // Redirect to dashboard
//             } else {
//                 alert("No matching driver found. Please check your details.");
//             }
//         } catch (error: any) {
//             alert(`Error: ${error.message}`);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
//             <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
//                 <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">🚖 Driver Sign-In</h1>

//                 <div className="flex items-center border rounded-md px-3 py-2 mb-4 shadow-sm">
//                     <FaEnvelope className="text-gray-400 mr-2" />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full focus:outline-none"
//                     />
//                 </div>

//                 <div className="flex items-center border rounded-md px-3 py-2 mb-4 shadow-sm">
//                     <FaCar className="text-gray-400 mr-2" />
//                     <input
//                         type="text"
//                         placeholder="Vehicle Number"
//                         value={vehicleNumber}
//                         onChange={(e) => setVehicleNumber(e.target.value)}
//                         className="w-full focus:outline-none"
//                     />
//                 </div>

//                 <button
//                     onClick={handleDriverSignIn}
//                     className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white py-3 rounded-md shadow-md">
//                     🚀 Sign In
//                 </button>
//             </div>
//         </div>
//     );
// }



"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FaEnvelope, FaCar } from 'react-icons/fa';

export default function DriverSignInPage() {
    const [email, setEmail] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const router = useRouter();

    const handleDriverSignIn = async () => {
        try {
            const q = query(
                collection(db, "drivers"),
                where("email", "==", email),
                where("vehicleNumber", "==", vehicleNumber)
            );

            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const driverData = querySnapshot.docs[0].data();
                // Store driver data in localStorage
                localStorage.setItem('driverData', JSON.stringify(driverData));
                router.push('/driver-dashboard'); // Redirect to dashboard
            } else {
                alert("No matching driver found. Please check your details.");
            }
        } catch (error: any) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">🚖 Driver Sign-In</h1>

                <div className="flex items-center border rounded-md px-3 py-2 mb-4 shadow-sm">
                    <FaEnvelope className="text-gray-400 mr-2" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full focus:outline-none"
                    />
                </div>

                <div className="flex items-center border rounded-md px-3 py-2 mb-4 shadow-sm">
                    <FaCar className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Vehicle Number"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        className="w-full focus:outline-none"
                    />
                </div>

                <button
                    onClick={handleDriverSignIn}
                    className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white py-3 rounded-md shadow-md">
                    🚀 Sign In
                </button>
            </div>
        </div>
    );
}
