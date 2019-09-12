import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NasaList from './NasaList';

import Spinner from './Spinner';

function Nasa() {
  const [nasaPhotoData, setNasaPhotoData] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=RvkEnkyfMa9Kyeuint7mdZ9et95NSW4eQpCbQpbX&date=${date}`)
      .then(response => {
        // const photos = response.data;
        // console.log('response', photos);    
        setNasaPhotoData(response.data);
      })
      .catch(error => {
        console.log('No data returned', error);
    })
  }, [date]);

  const changeHandler = e => {
    setDate(e.target.value);
  }

  return (
    <div>
      <form className='form'>
        <label>Missed a day? Go back in time and see more!</label>
        <input
          className='input'
          name='date'
          type='date'
          value={date}
          onChange={changeHandler}
        />
      </form>
      <h1>NASA's Astronomy Picture of the Day!</h1>
      <NasaList
        hdurl={nasaPhotoData.hdurl}
        title={nasaPhotoData.title}
        copyright={nasaPhotoData.copyright}
        date={nasaPhotoData.date}
        explanation={nasaPhotoData.explanation}
      />
    </div>
  );
}


export default Nasa;
