// 'use client'
// import { UserLocationContext } from '@/context/UserLocationContext'
// import { Client } from '@clerk/nextjs/server'
// import React, { useContext,useEffect,useState }  from 'react'
// import { Map ,Marker} from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css';



// function MapBoxMap(){
//     const {userLocation,setUserLocation}=useContext(UserLocationContext)
    
//     return (
//         <div className='p-5' >
//             <h2 className='text-[20px] font-semibold' >Map</h2>
//             <div className='rounded-lg overflow-hidden'>   
//        {userLocation? <Map
//       mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
//       initialViewState={{
//         // longitude: -122.4,
//         // latitude: 37.8,
//         // zoom: 14
//         longitude: userLocation?.lng, 
//         latitude: userLocation?.lat,  
//         zoom: 14
//       }}
//       style={{width: '100%', height: 500, borderRadius:10}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//     >
//         <Marker longitude={userLocation?.lng} latitude={userLocation?.lat} anchor="bottom" >
//       <img src="./pin.png" />
//     </Marker>
//         </Map>:null}
//     </div>
//     </div>
//     )
   
// }
      



// export default MapBoxMap

'use client';
import { v4 as uuidv4 } from "uuid";
import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext, useEffect, useRef } from 'react';
import { Map, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useUser } from '@clerk/nextjs';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import Markers from './Markers';
import { DirectionDataContext } from "@/context/DirectionDataContext";
import MapBoxRoute from "./MapBoxRoute";
import DistanceTime from "./DistanceTime";
const MAPBOX_DRIVING_ENDPOINT="https://api.mapbox.com/directions/v5/mapbox/driving/";
const sessionToken = uuidv4();

const MapBoxMap: React.FC = () => {
  const mapRef=useRef<any>(null);
   const {sourceCoordinates,setSourceCoordinates}=useContext(SourceCoordiContext);
    const {destinationCoordinates,setDestinationCoordinates}=useContext(DestinationCoordiContext);
   const {directionData,setDirectionData} =useContext(DirectionDataContext);
    //Fly to source 
  useEffect(()=>{
        if(sourceCoordinates){
          mapRef.current?.flyTo({
            center:[sourceCoordinates.lng,sourceCoordinates.lat],
            duration:2500
          })
        }
  },[sourceCoordinates])
//Fly to destination
  useEffect(()=>{
    if(destinationCoordinates){
      mapRef.current?.flyTo({
        center:[destinationCoordinates.lng,destinationCoordinates.lat],
        duration:2500
      })
    }
    if(sourceCoordinates&&destinationCoordinates){
      getDirectionRoute();
    }
},[destinationCoordinates])

const getDirectionRoute=async()=>{
  const url = `${MAPBOX_DRIVING_ENDPOINT}${sourceCoordinates.lng},${sourceCoordinates.lat};${destinationCoordinates.lng},${destinationCoordinates.lat}?overview=full&geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;
  const res=await fetch(url,
    {
      headers:{
        "Content-Type":"application/json",
        
      }
    }
  );
  const result=await res.json();
  console.log(result);
  setDirectionData(result);
}
//MAPBOX_DRIVING_ENDPOINT+sourceCoordinates.lng+","+sourceCoordinates.lat+";"+
//destinationCoordinates.lng+","+destinationCoordinates.lat+
//"?overview=full&geometries=geojson"+"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,

  const context = useContext(UserLocationContext);
  // Check if context is available
  if (!context) {
    return <div>Error: UserLocationContext not available</div>;
  }
  const { userLocation } = context;
  useUser()
 
  


  


  return (
    <div className='p-5'>
      <h2 className='text-[20px] font-semibold'>Map</h2>
      <div className='rounded-lg overflow-hidden'>
        {userLocation ? (
          <Map
          ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation.lng,
              latitude: userLocation.lat,
              zoom: 14,
            }}
            style={{ width: '100%', height: 500, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
          

            <Markers/>
            {directionData?.routes?(
              <MapBoxRoute coordinates={directionData?.routes[0].geometry?.coordinates}/>
            ):null}
          </Map>
        ) : (
          <div className="text-center text-gray-500">Loading map...</div>
        )}
      </div>
        <div className="absolute bottom-[40px] z-20 right-[20px] hidden md:block"><DistanceTime/></div>
    </div>
  );
};

export default MapBoxMap;

