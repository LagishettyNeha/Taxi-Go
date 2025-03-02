// import { NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";
// const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
// export async function GET(request:any) {
//     const {searchParams}=new URL(request.url)
//     const searchText=searchParams.get('q');
   
//     const sessionToken = uuidv4()
//     // const res = await fetch(`${BASE_URL}?q=${encodeURIComponent(searchText)}&language=en&limit=6&session_token=${sessionToken}&country=US`,{
//     const res=await fetch (BASE_URL+'?q='+searchText+'?language=en&limit=6&session_token=${sessionToken}&country=US'+"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
//         {
//         headers:{

//             "Content-Type":"application/json"
//         }
//     });
    
//    // const res=await fetch (BASE_URL+'?q='+searchText+'?language=en&limit=6&session_token=${sessionToken}&country=US')
//    const searchResult=await res.json();
//     return NextResponse.json({data:searchText})
    
// }

import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

export async function GET(request:any) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('q') || '';
   
    const sessionToken = uuidv4();

    // Fetch data from Mapbox API
    const res = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(searchText)}&language=en&limit=6&session_token=${sessionToken}&country=IN&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    // Check if the fetch was successful
    if (!res.ok) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

    const searchResult = await res.json();
    
    // Return the actual search results
    return NextResponse.json(searchResult);
}
