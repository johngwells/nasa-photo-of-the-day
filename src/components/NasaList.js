import React from 'react';

import styled from 'styled-components'

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(204, 243, 255, 0.1);
  box-shadow: 5px 5px 10px black;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 15px;
`;

const StyledH1 = styled.h1`
  padding: 25px;
`

function NasaList({ hdurl, title, copyright, date, explanation }) {
  return (
    <div className='nasaList'>
    
      <img src={hdurl} className='flip-scale-up-diag-2' alt='nasa space'/>
      <StyledList>
      <StyledH1>{title}</StyledH1>
      <h3>Photo by: {copyright}</h3>
      <p className='scale-in-hor-left'>{explanation}</p>
      <h5>{date}</h5>
      </StyledList>
    </div>
  );
}

export default NasaList;