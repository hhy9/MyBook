import React,{useState} from 'react';
import styled from 'styled-components';

const Nav = () => {

  const [open,setOpen] = useState(false);
  return (
    <>
      <NavDiv>
          <ul className="nav-ul">
            <li className="nav-li" onClick={() => setOpen(!open) }>
              도서관 & 책
            </li>
            <li className="nav-li">
              나의 도서실
            </li>
          </ul>
      </NavDiv>  
    </>
  )
}

const NavDiv = styled.div`
    //width:100%;
  //   height:10%;
  // border-bottom:1px solid white;
  .nav-ul {
    margin:0 auto;
    
    list-style:none;
      .nav-li {
        //display:contents;
        color:white;
        float:left;
        cursor:pointer;
        padding:20px 0px 10px 50px;
      }//nav-li

  }//nav-ul
`;

export default Nav;
