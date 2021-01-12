import React,{useState} from 'react';
import styled from 'styled-components'
import Logo from '../item/Logo'

const DropdownNav = () => {
  const [open,setOpen] = useState(false)

  

  return (
    <>
    <NavMain>
        <div className="logoDiv">
          <Logo/>
        </div>
      <div className="firstMenuDiv" onClick={()=>setOpen(!open)}>
        나의 책       
        </div>
         {/* {
           open? (
             <div className="menu"> 
                <li>도서관 찾기</li>
                <li>책 찾기</li>
             </div>
           ) : null
         } */}
    </NavMain>
    </>
  )
}

const NavMain = styled.div`
  width:40%;
  margin: 0 auto;
  .logoDiv{
    margin : 0 auto;
    width: 200px;
  }
  .firstMenuDiv{
    padding: 10px 30px 0px 30px;
    color:black;
    font-weight:bold;
    font-size:18px;
  }

`;



export default DropdownNav;