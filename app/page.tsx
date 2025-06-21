'use client'
import Booking from "@/components/Booking/Booking";
 import MapBoxMap from "@/components/Map/MapBoxMap";
import { DestinationCoordiContext } from "@/context/DestinationCoordiContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { SourceCoordiContext } from "@/context/SourceCoordiContext";
 import { UserLocationProvider } from '@/context/UserLocationContext';
import { UserLocationContext } from "@/context/UserLocationContext";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {
  
  
  const [userLocation,setUserLocation]=useState<any>();
  //  const [sourceCoordinates,setSourceCoordinates]=useState<any>({ lat: 0, lng: 0 });
  //   const [destinationCoordinates,setDestinationCoordinates]=useState<any>({ lat: 0, lng: 0 });
  const [sourceCoordinates, setSourceCoordinates] = useState<{ lat: number; lng: number } | null>(null);
const [destinationCoordinates, setDestinationCoordinates] = useState<{ lat: number; lng: number } | null>(null);

    const [directionData,setDirectionData]=useState<any>([]);
  // useEffect(()=>{
  //   getUserLocation();
  // },[])
  // const getUserLocation=()=>{
  //   navigator.geolocation.getCurrentPosition(function(pos){
  //     setUserLocation({lat:pos.coords.latitude,
  //       lng:pos.coords.longitude
  //     })
  //   })
  // }

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
        // Handle the error case
      }
    );
  };
  return (
    <div>
      <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
        <SourceCoordiContext.Provider value={{sourceCoordinates,setSourceCoordinates}}>
        <DestinationCoordiContext.Provider value={{destinationCoordinates,setDestinationCoordinates}}>
          <DirectionDataContext.Provider value={{directionData,setDirectionData}}>
     <div className="grid grid-cols-1 md:grid-cols-3">
         <div >
          <Booking/>
         </div>
         <div className="col-span-2">
           <MapBoxMap/>
         </div>
     </div>
     </DirectionDataContext.Provider>
     </DestinationCoordiContext.Provider>
     </SourceCoordiContext.Provider>
     </UserLocationContext.Provider>
    </div>
  );
}
