import React from 'react';

function NasaList({ nasaData }) {
  return (
    <div className='nasalist'>
      <img src={nasaData.hdurl} alt='nasa space'/>
      <h1>{nasaData.title}</h1>
      <h3>Photo by: {nasaData.copyright}</h3>
      <h3>{nasaData.date}</h3>
      <p>{nasaData.explanation}</p>
    </div>
  );
}

export default NasaList;