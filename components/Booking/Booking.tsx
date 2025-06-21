"use client";
import React, { useEffect, useState } from 'react';
import AutocompleteAddress from './AutocompleteAddress';
import Cars from './Cars';
import Cards from './Cards';
import { db } from '@/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import { useUser } from '@clerk/nextjs';

function Booking() {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [carType, setCarType] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const { user } = useUser(); // Clerk user

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenHeight(window.innerHeight * 0.72);
    }
  }, []);

  const handleBooking = async () => {
    if (!source || !destination || !carType || !paymentMode) {
      setMessage('❌ Please fill all fields!');
      return;
    }

    setLoading(true);
    const otp = Math.floor(1000 + Math.random() * 9000);

    try {
      const bookingRef = collection(db, 'bookings');
      await addDoc(bookingRef, {
        source,
        destination,
        carType,
        paymentMode,
        timestamp: new Date().toISOString(),
        otp: otp, // storing OTP
      });

      // send OTP via email
      await emailjs.send(
        'service_qihk5d9', 
        'template_uxhzi9t', 
        {
          to_name: user?.fullName || 'Customer',
          message: otp.toString(),
          email:user?.primaryEmailAddress?.emailAddress,
        },
        '_MClQp5z2c2rcCfdU' 
      );

      setMessage(`✅ Booking successful! Your ride OTP is ${otp} (also sent via email).`);
    } catch (error: any) {
      console.error(
        '❌ Error saving booking or sending email:',
        error?.text || error?.message || JSON.stringify(error)
      );
      setMessage('❌ Booking failed. Try again.');
    }
    finally {
      setLoading(false);  
    }
           
    
      
  };

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md" style={{ height: screenHeight }}>
        <AutocompleteAddress setSource={setSource} setDestination={setDestination} />
        <Cars setCarType={setCarType} />
        <Cards setPaymentMode={setPaymentMode} />

        <button
          className="w-full bg-yellow-400 p-2 rounded-md mt-4"
          onClick={handleBooking}
          disabled={loading}
        >
          {loading ? 'Booking...' : 'Book'}
        </button>

        {message && <p className="mt-3 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}

export default Booking;



// "use client";
// import React, { useEffect, useState } from 'react';
// import AutocompleteAddress from './AutocompleteAddress';
// import Cars from './Cars';
// import Cards from './Cards';
// import { db } from '@/firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';

// function Booking() {
//   const [screenHeight, setScreenHeight] = useState<number>(0);
//   const [source, setSource] = useState<string>('');
//   const [destination, setDestination] = useState<string>('');
//   const [carType, setCarType] = useState<string>('');
//   const [paymentMode, setPaymentMode] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const [message, setMessage] = useState<string>('');

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setScreenHeight(window.innerHeight * 0.72);
//     }
//   }, []);

//   const handleBooking = async () => {
//     if (!source || !destination || !carType || !paymentMode) {
//       setMessage('❌ Please fill all fields!');
//       return;
//     }

//     setLoading(true);
//     try {
//       const bookingRef = collection(db, 'bookings');
//       await addDoc(bookingRef, {
//         source,
//         destination,
//         carType,
//         paymentMode,
//         timestamp: new Date().toISOString(),
//       });

//       setMessage('✅ Booking successful!');
//     } catch (error) {
//       console.error('Error saving booking:', error);
//       setMessage('❌ Booking failed. Try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-[20px] font-semibold">Booking</h2>
//       <div className="border-[1px] p-5 rounded-md" style={{ height: screenHeight }}>
//         <AutocompleteAddress setSource={setSource} setDestination={setDestination} />
//         <Cars setCarType={setCarType} />
//         <Cards setPaymentMode={setPaymentMode} />

//         <button
//           className="w-full bg-yellow-400 p-2 rounded-md mt-4"
//           onClick={handleBooking}
//           disabled={loading}
//         >
//           {loading ? 'Booking...' : 'Book'}
//         </button>

//         {message && <p className="mt-3 text-center text-sm">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default Booking;
















