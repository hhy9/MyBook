import React from 'react';
import styled from 'styled-components';
import Nav from '../layout/Nav'

const MainPage = () => {
  return (
    <>
      <MainDiv>
        <Nav/>
      </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
width:100%;
height:100vh;
background-image: url('https://res.cloudinary.com/tinaland/image/upload/v1596348812/nick-fewings-f2Bi-VBs71M-unsplash_dxjphv.jpg');
background-size:cover;
`;

export default MainPage;