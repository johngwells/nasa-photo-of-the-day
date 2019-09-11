import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NasaList from './NasaList';

function Nasa() {
  const [nasaPhotoData, setNasaPhotoData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=RvkEnkyfMa9Kyeuint7mdZ9et95NSW4eQpCbQpbX')
      .then(response => {
        const photos = response.data;
        console.log('response', photos);    
        setNasaPhotoData(photos);
      })
      .catch(error => {
        console.log('No data returned', error);
    })
  }, []);

  return (
    <div>
      <h1>NASA's Astronomy Picture of the Day!</h1>
      <NasaList nasaData={nasaPhotoData} />
    </div>
  );
}

export default Nasa;
