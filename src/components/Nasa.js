import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

import NasaList from './NasaList';

import Spinner from './Spinner';

const StyledForm = styled.form`
    @media only screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    margin-right: 5%;
  }
`;

const StyledDate = styled.input`
  margin-left: 5px;
  margin-top: 15px;
  appearance: none;
  color: #db9833;
  box-sizing: border-box;
  border: 1px solid #db9833;
  background: transparent;
  font-size: 1.8rem;
  padding: 3px;
  text-shadow: 1px 1px 5px #db9833;
  ::-webkit-datetime-edit-text { padding: 0 0.5rem; }
  ::-webkit-datetime-edit-month-field { text-transform: uppercase; }
  ::-webkit-datetime-edit-day-field { text-transform: uppercase; }
  ::-webkit-datetime-edit-year-field { text-transform: uppercase; }
  ::-webkit-inner-spin-button { display: none; }
  ::-webkit-calendar-picker-indicator { background: transparent;}
`;

const Styledh1 = styled.h1`
  color: white;
  font-size: 1.5rem;
  padding: 15px;
  opacity: .2;
  @media only screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`

function Nasa() {
  const [nasaPhotoData, setNasaPhotoData] = useState([]);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=RvkEnkyfMa9Kyeuint7mdZ9et95NSW4eQpCbQpbX&date=${date}`)
      .then(response => {
        setLoading(true);
        setNasaPhotoData(response.data);
      })
      .catch(error => {
        console.log('No data returned', error);
        setLoading(true);
    })
    setLoading(false);
  }, [date]);

  const changeHandler = e => {
    setDate(e.target.value);
  }

  if (loading) {
  return (
    <div>
      <StyledForm className='form'>
        <StyledDate
          className='input'
          name='date'
          type='date'
          value={date}
          onChange={changeHandler}
        />
      </StyledForm>

      <Styledh1>NASA - Astronomy Daily Photo</Styledh1>
      <NasaList
        hdurl={nasaPhotoData.hdurl}
        title={nasaPhotoData.title}
        copyright={nasaPhotoData.copyright}
        date={nasaPhotoData.date}
        explanation={nasaPhotoData.explanation}
      />
    </div>
  );
  } else {
    return <Spinner />
  }
}

export default Nasa;
