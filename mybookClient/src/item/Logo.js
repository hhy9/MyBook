import React from 'react';
import styled from 'styled-components';
import BookLogo from '../img/BookLogo.jpg'

const Logo = () => {
  return (
    <>
      <ImgDiv>
        <img className="logoImg" src={BookLogo} alt="Logo" />      
      </ImgDiv>
    </>
    
  )
}

const ImgDiv =  styled.div`

  .logoImg {
    width:200px;
    height:150px;
  }
`;

export default Logo;