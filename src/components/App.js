import React, { useState, useEffect } from "react";

function App() {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from the API using useEffect
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the dog image URL and set loading to false
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false); 
      });
  }, []); 

  // Render the component
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Display loading message while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image
      )}
    </div>
  );
}

export default App;
