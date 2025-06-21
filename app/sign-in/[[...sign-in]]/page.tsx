// "use client";
// import { SignIn, useUser } from '@clerk/nextjs'


// export default function Home1() {
//   const { user } = useUser()

//   if (!user) {
//     return <SignIn />
//   }

//  // return <div>Welcome</div>
// }







"use client";
import { SignIn, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home1() {
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    if (user) {
      router.push('/'); // Redirect to home after sign-in
    } else {
      setIsLoading(false); // Stop loading if user is not authenticated
    }
  }, [user, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading spinner or message
  }

  if (!user) {
    return <SignIn />; // Show the sign-in form if the user is not authenticated
  }

  return null; // Prevents the "Welcome" text from showing
}


// "use client";
// import { SignIn, useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function Home1() {
//   const { user } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     if (user) {
//       router.push('/'); // Redirect to home after sign-in
//     }
//   }, [user, router]);

//   if (!user) {
//     return <SignIn />;
//   }

//   //return null; // Prevents the "Welcome" text from showing
// }
