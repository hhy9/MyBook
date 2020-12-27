import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <>
      <NavDiv>
          <ul className="nav-ul">
            <li>
              책 검색
            </li>
          </ul>
      </NavDiv>  
    </>
  )
}

const NavDiv = styled.div`
  .nav-ul {
    margin:0 auto;
  }
`;

export default Nav;
