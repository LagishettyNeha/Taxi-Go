// import React,{useContext} from 'react'
// import { SourceCoordiContext } from '@/context/SourceCoordiContext';
// import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
// import { Map,Marker } from 'react-map-gl';
// import { UserLocationContext } from '@/context/UserLocationContext';


// function Markers() {
//   // const {userLocation,setUserLocation}=useContext(UserLocationContext);
//   const {userLocation,setUserLocation}=useContext(UserLocationContext);
//    const {sourceCoordinates,setSourceCoordinates}=useContext(SourceCoordiContext);
//     const {destinationCoordinates,setDestinationCoordinates}=useContext(DestinationCoordiContext);

  
//   return (
//     <div>
//      <Marker longitude={userLocation.lng} latitude={userLocation.lat} anchor="bottom">
//         <img src="./pin.png" alt="Marker" className='w-10 h-10' />
//     </Marker>
//       {/*Souce marker*/}

//       {sourceCoordinates.length!=0?<Marker longitude={sourceCoordinates?.lng} latitude={sourceCoordinates?.lat} anchor="bottom">
//         <img src="./pin.png" alt="Marker" className='w-10 h-10' />
//     </Marker>:null}
//         {/*Destination marker*/}
//         {destinationCoordinates.length!=0?<Marker longitude={destinationCoordinates?.lng} latitude={?.lat} anchor="bottom">
//         <img src="./pin.png" alt="Marker" className='w-10 h-10' />
//     </Marker>:null}
//     </div>
//   )
// }


// export default Markers



import React, { useContext } from 'react';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { Marker } from 'react-map-gl';
import { UserLocationContext } from '@/context/UserLocationContext';

function Markers() {
  const { userLocation } = useContext(UserLocationContext);
  const { sourceCoordinates } = useContext(SourceCoordiContext);
  const { destinationCoordinates } = useContext(DestinationCoordiContext);

  return (
    <div>
      {/* User Location Marker */}
      {userLocation && userLocation.lng !== undefined && userLocation.lat !== undefined && (
        <Marker longitude={userLocation.lng} latitude={userLocation.lat} anchor="bottom">
          <img src="./pin.png" alt="User Marker" className='w-10 h-10' />
        </Marker>
      )}

      {/* Source Marker */}
      {sourceCoordinates && sourceCoordinates.lng !== undefined && sourceCoordinates.lat !== undefined && (
        <Marker longitude={sourceCoordinates.lng} latitude={sourceCoordinates.lat} anchor="bottom">
          <img src="./pin.png" alt="Source Marker" className='w-10 h-10' />
        </Marker>
      )}

      {/* Destination Marker */}
      {destinationCoordinates && destinationCoordinates.lng !== undefined && destinationCoordinates.lat !== undefined && (
        <Marker longitude={destinationCoordinates.lng} latitude={destinationCoordinates.lat} anchor="bottom">
          <img src="./pin.png" alt="Destination Marker" className='w-10 h-10' />
        </Marker>
      )}
    </div>
  );
}

export default Markers;


