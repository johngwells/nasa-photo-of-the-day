import React from 'react';

function NasaList({ hdurl, title, copyright, date, explanation }) {
  return (
    <div className='nasalist'>
      <img src={hdurl} alt='nasa space'/>
      <h1>{title}</h1>
      <h3>Photo by: {copyright}</h3>
      <h3>{date}</h3>
      <p>{explanation}</p>
    </div>
  );
}

export default NasaList;