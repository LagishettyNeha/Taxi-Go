import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp />
  
}



















// "use client";
// import { SignUp, useUser } from "@clerk/nextjs";
// import { useEffect } from "react";
// // import { db } from "../firebaseConfig"; 
// import { db } from "@/firebaseConfig";  
// import { doc, setDoc } from "firebase/firestore";

// export default function Page() {
//   const { user } = useUser();

//   useEffect(() => {
//     if (user) {
//       const saveUserToFirestore = async () => {
//         try {
//           // Reference to the "users" collection, user.id as document ID
//           const userRef = doc(db, "users", user.id);
          
//           // Set user data (Firestore automatically creates "users" collection if it doesn't exist)
//           await setDoc(userRef, {
//             id: user.id,
//             name: user.fullName,
//             email: user.primaryEmailAddress?.emailAddress || "",
//             createdAt: new Date(),
//           });

//           console.log("User saved to Firestore!");
//         } catch (error) {
//           console.error("Error saving user:", error);
//         }
//       };

//       saveUserToFirestore();
//     }
//   }, [user]);

//   return <SignUp />;
// }
