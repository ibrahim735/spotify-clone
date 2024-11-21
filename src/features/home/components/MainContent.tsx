// import { useEffect, useState } from "react";

// type Artist = {
//   id: number;
//   title: string;
//   body: string;
//   img: string;
// }

// const MainContent = () => {
//   const [artists, setArtists] = useState<Artist[]>([]); // Initialize posts state with an empty array

//   useEffect(() => {
//     // Fetch data from API
//     fetch("https://api.spotify.com/v1/artists/{id}")
//       .then((response) => response.json())
//       .then((data: Artist[])  => {
//         setArtists(data); // Save fetched data to state
//       }).catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
  
//   return (
//     <div className="flex-1 bg-gradient-to-b from-[#222222] to-[#121212] rounded-md">
//       {artists.map((artist) => (
//         <div key={artist.id} className="w-20 h-20 rounded-full ">
//           <h3 className="text-white text-xl font-bold">{artist.title}</h3>
//           <p className="text-white text-sm">{artist.body}</p>
//           <img src={artist.img} alt="" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MainContent;


import { useEffect, useState } from "react";

interface Artist {
  id: number;
  title: string;
  body: string;
}

const MainContent = () => {
  const [artists, setArtists] = useState<Artist[]>([]); 
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { 
    fetch("https://api.spotify.com/v1/artists/{id}")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setArtists(data); // Save data if it's an array
        } else {
          console.error("Unexpected data format:", data);
          setArtists([]); // Set empty array if data is not an array
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data.");
      });
  }, []);

  if (error) {
    return <p className="text-white text-center p-4">{error}</p>;
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-[#222222] to-[#121212] rounded-md">
      {artists.length > 0 ? (
        artists.map((artist) => (
          <div key={artist.id} className="p-4 flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold">{artist.title}</h3>
            <p className="text-white text-sm">{artist.body}</p>
          </div>
        ))
      ) : (
        <p className="text-white text-center p-4">No data available</p>
      )}
    </div>
  );
};

export default MainContent;
