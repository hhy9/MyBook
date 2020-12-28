import React from 'react';
import styled from 'styled-components';
import Nav from '../layout/Nav'

const MainPage = () => {
  return (
    <>
      <MainDiv>
        <header className="main-header">
        <Nav/>
        </header>
      </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
width:100%;
height:100vh;
background-image: url('https://res.cloudinary.com/tinaland/image/upload/v1596348812/nick-fewings-f2Bi-VBs71M-unsplash_dxjphv.jpg');
background-size:cover;
  .main-header{
    height:8%;
    border-bottom:1px solid white;
  }
`;

export default MainPage;