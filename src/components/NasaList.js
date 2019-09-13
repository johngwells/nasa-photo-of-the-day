import React from 'react';

import styled from 'styled-components'

const StyledList = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  background: rgba(204, 243, 255, 0.1);
  box-shadow: 5px 5px 10px black;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 15px;
`;

const StyledExplanation = styled.p`
  @media only screen and (max-width: 500px) {
      margin-left: 4%;
      margin-right: 4%;
      width: 95%;
    }
`;

const Footer = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: white;
  margin-top: 100px;
  a {
    color: white;
  }
  a:hover {
    color: #db9833;
  }
`

const StyledH1 = styled.h1`
  color: #db9833;
  padding: 25px;
  text-shadow: 1px 1px 5px #db9833;
  @media only screen and (max-width: 500px) {
    margin-left: -20px;
    font-size: 1.8rem;
    width: 95%;
  }
`

function NasaList({ hdurl, title, copyright, date, explanation }) {
  return (
    <div className='nasaList'>
      <img src={hdurl} className='flip-scale-up-diag-2' alt='nasa space'/>
      <StyledList>
      <StyledH1>{title}</StyledH1>
      <h3>Photo by: {copyright}</h3>
      <StyledExplanation className='scale-in-hor-left'>{explanation}</StyledExplanation>
      <h5>{date}</h5>
      </StyledList>
      <Footer><a href="mailto:johngwells@gmail.com">©John Wells</a> - <a href="https://twitter.com/johnwellsio">FullStack Developer</a></Footer>
    </div>
  );
}

export default NasaList;