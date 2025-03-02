// import React from 'react'
// import AutocompleteAddress from './AutocompleteAddress'

// function Booking() {
//     const screenHight=window.innerHeight;

//   return (
//     <div className='p-5'>
//         <h2 className='text-[20px] font-semibold'>Booking</h2>
//         <div className='border-[1px] p-5 rounded-md' style={{height:screenHight}}>
//         <AutocompleteAddress/>
//         </div>
      
//     </div>
//   )
// }

// export default Booking
// {/* <time datetime="2016-10-25" suppressHydrationWarning /> */}
// "use client";
// import React, { useEffect, useState } from 'react';
// import AutocompleteAddress from './AutocompleteAddress';
// import Cars from './Cars';



// function Booking() {
//     const [screenHeight, setScreenHeight] = useState(0);

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             setScreenHeight(window.innerHeight*0.72);
//         }
//     }, []);

//     return (
//         <div className='p-5'>
//             <h2 className='text-[20px] font-semibold'>Booking</h2>
//             <div className='border-[1px] p-5 rounded-md '  style={{ height: screenHeight }}>
//                 <AutocompleteAddress />
//                 <Cars/>
               
//                 <button className='w-full bg-yellow-400 p-1 rounded-md mt-4'>Book</button>
//             </div>
//         </div>
//     );
// }

// export default Booking;

"use client";
import React, { useEffect, useState } from 'react';
import AutocompleteAddress from './AutocompleteAddress';
import Cars from './Cars';
import Cards from './Cards';

function Booking() {
    const [screenHeight, setScreenHeight] = useState<number | null>(null);

    useEffect(() => {
        // This will only run on the client
        setScreenHeight(window.innerHeight * 0.72);
    }, []);

    // If screenHeight is still null, render a loading state
    if (screenHeight === null) {
        return <div className='p-5'>Loading...</div>; // Or any loading spinner/component
    }

    return (
        <div className='p-5'>
            <h2 className='text-[20px] font-semibold'>Booking</h2>
            <div className='border-[1px] p-5 rounded-md' style={{ height: screenHeight }}>
                <AutocompleteAddress />
                <Cars />
                <Cards></Cards>
                <button className='w-full bg-yellow-400 p-1 rounded-md mt-4'>Book</button>
            </div>
        </div>
    );
}

export default Booking;


