// import Image from 'next/image'
// import React from 'react'
// import { UserButton } from "@clerk/nextjs";

// function NavBar() {
//   return (
//     <div className='flex justify-between p-3 px-10 border-b-[1px] shadow-md'>
//       <div className='flex gap-10 items-center' >
//         <Image src='/logotaxi2.png' alt='logos' width={120} height={60}></Image>
//         <div className='hidden md:flex gap-6'>
//         <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
//         <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</h2>
//         <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
//        </div>
//       </div>
//       <UserButton afterSignOutUrl="/"/>
//     </div>
//   )
// }

// export default NavBar




import Image from 'next/image';
import React from 'react';
import { UserButton } from '@clerk/nextjs';
import ThemeToggle from './ThemeToggle';  // Import the ThemeToggle component
import Weather from './weather';

function NavBar() {
  return (
    <div className='flex justify-between p-3 px-10 border-b-[1px] shadow-md'>
      <div className='flex gap-10 items-center'>
        <Image src='/logotaxi2.png' alt='logos' width={120} height={60} />
        <div className='hidden md:flex gap-6'>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</h2>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
        </div>
      </div>
      <div className='flex items-center gap-4'>
      <ThemeToggle /> 
      <Weather/>
        <UserButton afterSignOutUrl="/" />
        
      </div>
    </div>
  );
}

export default NavBar;
