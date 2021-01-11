import React from 'react';
import styled from 'styled-components';
import DropdownNav from '../layout/DropdownNav';

const MainPage = () => {
  return (
    <>
      <MainDiv>
        <header className="main-header">
          <DropdownNav />
        </header>
      </MainDiv>
    </>
  )
}

const MainDiv = styled.div`
width:100%;
height:100vh;
  .main-header{
    height:8%;
   
  }
`;

export default MainPage;