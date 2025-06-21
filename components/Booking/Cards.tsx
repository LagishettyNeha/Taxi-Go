// import React, { useState } from 'react'
// import CardsList from '../data/CardsList'
// import Image from 'next/image'
// interface CardsProps {
//   setPaymentMode: (mode: string) => void;
// }

// function Cards() {
//     const [activeIndex,setActiveIndex]=useState<any>();
//   return (
//     <div>
//       <h2 className='text-[14px] font-medium'>Payment Methods</h2>
//       <div className='grid grid-cols-5 mt-2 pl-2'>
//         {CardsList.map((item,index)=>(
//             <div key={item.id} className={`w-[50px] border-[1px] flex items-center justify-center
//              rounded-md cursor-pointer 
//              hover:border-yellow-400
//              hover:scale-110 transition-all${
//                 activeIndex==index?
//                     'border-yellow-400 border-[2px]':null}`}
//              onClick={()=>setActiveIndex(index)}>
//                 <Image src={item.image}
//                 alt={item.name}
//                 width={30}
//                 height={50}
//                 />
//             </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Cards

import React, { useState } from 'react';
import CardsList from '../data/CardsList';
import Image from 'next/image';

interface CardsProps {
  setPaymentMode: (mode: string) => void;
}

function Cards({ setPaymentMode }: CardsProps) {
  const [activeIndex, setActiveIndex] = useState<number>();

  return (
    <div>
      <h2 className="text-[14px] font-medium">Payment Methods</h2>
      <div className="grid grid-cols-5 mt-2 pl-2">
        {CardsList.map((item, index) => (
          <div
            key={item.id}
            className={`w-[50px] border-[1px] flex items-center justify-center rounded-md cursor-pointer hover:border-yellow-400 hover:scale-110 transition-all ${
              activeIndex == index ? 'border-yellow-400 border-[2px]' : null
            }`}
            onClick={() => {
              setActiveIndex(index);
              setPaymentMode(item.name);
            }}
          >
            <Image src={item.image} alt={item.name} width={30} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;


















// import React from "react";

// interface CardsProps {
//   setPaymentMode: React.Dispatch<React.SetStateAction<string>>;
//   paymentMode: string; // ✅ Add this to display selected mode
// }

// const Cards: React.FC<CardsProps> = ({ setPaymentMode, paymentMode }) => {
//   return (
//     <div>
//       <h3>Select Payment Mode</h3>
//       <button onClick={() => setPaymentMode("Credit Card")} className={paymentMode === "Credit Card" ? "bg-green-500 text-white" : ""}>
//         Credit Card
//       </button>
//       <button onClick={() => setPaymentMode("Cash")} className={paymentMode === "Cash" ? "bg-green-500 text-white" : ""}>
//         Cash
//       </button>
//       <p>Selected Payment: {paymentMode || "None"}</p>
//     </div>
//   );
// };

// export default Cards;

