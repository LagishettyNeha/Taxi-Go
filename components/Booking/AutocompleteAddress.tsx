// import React, { useEffect, useState } from 'react'

// function AutocompleteAddress() {
//   const [source,setSource]=useState<any>('')
//   const [sourceChange,setSourcechange]=useState<any>(false);
//   const [destinationChange,setDestinationChange]=useState<any>(false)
//   const[addressList,setAddressList]=useState<any>([]);
//   const [destination,setDestination]=useState<any>();




//   useEffect(()=>{
//     const delayDebounceFn=setTimeout(()=>{
//       getAddressList()
//     },1000)
//     return ()=>clearTimeout(delayDebounceFn)
    
//   },[source,destination]);

//   const getAddressList=async()=>{
//     setAddressList([]);
//     const query=sourceChange?source:destination;
//     const res= await fetch('/api/search-address?q='+source,{
//       headers:{
//         "Content-Type":"application/json",
//       }

//     });
//     const result=await res.json();
//     setAddressList(result)
//   }
//   return (
//     <div className='mt-5'>
//       <div className='relative'>
//         <label className='text-gray-400'>Where From?</label>
//         <input type="text" className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
//         value={source}
//         onChange={(e)=>setSource(e.target.value)}/>
//         {addressList.suggestions&&sourceChange?
//         <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
//         {addressList.suggestions.map((item:any,index:number)=>(
          
//           <h2 className='p-3 hover:bg-gray-100 cursor-pointer'
//           onClick={()=>{setSource(item.full_address);
//             setAddressList([]);
//             setSourcechange(false);
//           }}
//           key={index}>{item.full_address}</h2> 
//         ))}
//           </div>:null}
//       </div>
   
//       <div className='mt-3'>
//         <label className='text-gray-400'>Where To?</label>
//         <input type="text" className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'/>
//       </div>

//     </div>

//   )
// }

// export default AutocompleteAddress
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import React, { useContext, useEffect, useState } from 'react';

// interface AddressSuggestion {
//   full_address: string;
// }
// interface ApiResponse {
//   suggestions: AddressSuggestion[];
// }
// interface AddressList {
//   source: AddressSuggestion[];
//   destination: AddressSuggestion[];
// }

//new work


// function AutocompleteAddress() {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [sourceChange, setSourceChange] = useState(false);
//   const [destinationChange, setDestinationChange] = useState(false);
//   const [addressList, setAddressList] = useState({ source: [], destination: [] });

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (sourceChange) {
//         getAddressList('source', source);
//       }
//     }, 1000);

//     return () => clearTimeout(delayDebounceFn);
//   }, [source, sourceChange]);

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (destinationChange) {
//         getAddressList('destination', destination);
//       }
//     }, 1000);

//     return () => clearTimeout(delayDebounceFn);
//   }, [destination, destinationChange]);

 


//     const getAddressList = async (type: 'source' | 'destination', query: string) => {
//       setAddressList((prev) => ({
//         ...prev,
//         [type]: [],
//       }));

//     const res = await fetch(`/api/search-address?q=${query}`, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const result = await res.json();

//     setAddressList((prev) => ({
//       ...prev,
//       [type]: result.suggestions || [],
//     }));
//   };
   
//   return (
//     <div className='mt-5'>
//       <div className='relative'>
//         <label className='text-gray-400'>Where From?</label>
//         <input
//           type="text"
//           className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
//           value={source}
//           onChange={(e) => {
//             setSource(e.target.value);
//             setSourceChange(true);
//           }}
//         />
//         {addressList.source.length > 0 && sourceChange && (
//           <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
//             {addressList.source.map((item, index) => (
//               <h2
//                 className='p-3 hover:bg-gray-100 cursor-pointer'
//                 onClick={() => {
//                   setSource(item.full_address);
//                   setAddressList((prev) => ({ ...prev, source: [] }));
//                   setSourceChange(false);
//                 }}
//                 key={index}
//               >
//                 {item.full_address}
//               </h2>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className='mt-3 relative'>
//         <label className='text-gray-400'>Where To?</label>
//         <input
//           type="text"
//           className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
//           value={destination}
//           onChange={(e) => {
//             setDestination(e.target.value);
//             setDestinationChange(true);
//           }}
//         />
//         {addressList.destination.length > 0 && destinationChange && (
//           <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
//             {addressList.destination.map((item, index) => (
//               <h2
//                 className='p-3 hover:bg-gray-100 cursor-pointer'
//                 onClick={() => {
//                   setDestination(item.full_address);
//                   setAddressList((prev) => ({ ...prev, destination: [] }));
//                   setDestinationChange(false);
//                 }}
//                 key={index}
//               >
//                 {item.full_address}
//               </h2>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AutocompleteAddress;
import { v4 as uuidv4 } from "uuid";
const MAPBOX_RETREIVE_URL='https://api.mapbox.com/search/searchbox/v1/retrieve/'
const sessionToken = uuidv4();
function AutocompleteAddress() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [sourceChange, setSourceChange] = useState(false);
  const {sourceCoordinates,setSourceCoordinates}=useContext(SourceCoordiContext);
  const {destinationCoordinates,setDestinationCoordinates}=useContext(DestinationCoordiContext);
  const [destinationChange, setDestinationChange] = useState(false);
  const [addressList, setAddressList] = useState({ source: [], destination: [] });
  

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (sourceChange) {
        getAddressList('source', source);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [source, sourceChange]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (destinationChange) {
        getAddressList('destination', destination);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [destination, destinationChange]);

 


    const getAddressList = async (type: 'source' | 'destination', query: string) => {
      setAddressList((prev) => ({
        ...prev,
        [type]: [],
      }));

    const res = await fetch(`/api/search-address?q=${query}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    setAddressList((prev) => ({
      ...prev,
      [type]: result.suggestions || [],
    }));
  };
   const onSourceAddressClick= async(item:any)=>{
    setSource(item.full_address);
    setAddressList([]);
    setSourceChange(false)
    
    const res = await fetch(`${MAPBOX_RETREIVE_URL}${item.mapbox_id}?session_token=${item.session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`);
    //ourconst res = await fetch(`${MAPBOX_RETREIVE_URL}${item.mapbox_id}?session_token=${sessionToken}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`);
    // const res=await fetch(MAPBOX_RETREIVE_URL+item.mapbox_id+"?session_token="+${sessionToken}+"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
    const result=await res.json();
    console.log(result);
  //   setSourceCoordinates({
  //     lng:result.features[0].geometry.coordinates[0],
  //     lat:result.features[0].geometry.coordinates[1],
  //   })
  //   console.log(result);
  //  }

   if (result.features && result.features.length > 0) {
    setSourceCoordinates({
      lng: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
  } else {
    console.error("No features found for source address:", item.full_address);
  }
};

   const onDestinationAddressClick= async(item:any)=>{
    setDestination(item.full_address);
    setAddressList([]);
    setDestinationChange(false)
    const res = await fetch(`${MAPBOX_RETREIVE_URL}${item.mapbox_id}?session_token=${sessionToken}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`);
    // const res=await fetch(MAPBOX_RETREIVE_URL+item.mapbox_id+"?session_token="+${sessionToken}+"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
    const result=await res.json();


  //   setDestinationCoordinates({
  //     lng:result.features[0].geometry.coordinates[0],
  //     lat:result.features[0].geometry.coordinates[1],
  //   })
  //   console.log(result);
  //  }

  if (result.features && result.features.length > 0) {
    setDestinationCoordinates({
      lng: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
  } else {
    console.error("No features found for destination address:", item.full_address);
  }
};


   


  return (
    <div className='mt-5'>
      <div className='relative'>
        <label className='text-gray-400'>Where From?</label>
        <input
          type="text"
          className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setSourceChange(true);
          }}
        />
        {addressList.source && addressList.source.length > 0 && sourceChange && (
          <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
            {addressList.source.map((item, index) => (
              <h2
                className='p-3 hover:bg-gray-100 cursor-pointer'
                onClick={() => {
                  // setSource(item.full_address);
                  // setAddressList((prev) => ({ ...prev, source: [] }));
                  // setSourceChange(false);
                  onSourceAddressClick(item)
                }}
                key={index}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        )}
      </div>

      <div className='mt-3 relative'>
        <label className='text-gray-400'>Where To?</label>
        <input
          type="text"
          className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setDestinationChange(true);
          }}
        />
        {addressList.destination && addressList.destination.length > 0 && destinationChange && (
          <div className='shadow-md p-1 rounded-md absolute w-full bg-white'>
            {addressList.destination.map((item, index) => (
              <h2
                className='p-3 hover:bg-gray-100 cursor-pointer'
                onClick={() => {
                  // setDestination(item.full_address);
                  // setAddressList((prev) => ({ ...prev, destination: [] }));
                  // setDestinationChange(false);
                  onDestinationAddressClick(item)
                }}
                key={index}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutocompleteAddress;

