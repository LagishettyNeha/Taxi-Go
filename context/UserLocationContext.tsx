import  {createContext} from 'react';
export const UserLocationContext=createContext<any>(null);


// import React, { createContext, useState, ReactNode } from 'react';

// interface UserLocation {
//   lng: number;
//   lat: number;
// }

// interface UserLocationContextType {
//   userLocation: UserLocation | null;
//   setUserLocation: React.Dispatch<React.SetStateAction<UserLocation | null>>;
// }

// export const UserLocationContext = createContext<UserLocationContextType | null>(null);

// export const UserLocationProvider = ({ children }: { children: ReactNode }) => {
//   const [userLocation, setUserLocation] = useState<UserLocation | null>(null);

//   return (
//     <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
//       {children}
//     </UserLocationContext.Provider>
//   );
// };
