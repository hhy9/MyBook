import React from "react";
import styled from "styled-components";
import DropdownNav from "../layout/DropdownNav";
import This_Mybook from "../img/This_Mybook.jpg";

const MainPage = () => {
  return (
    <>
      <MainDiv>
        <header className="main-header">
          <DropdownNav />
        </header>

        <MainBodyDiv>
          <div>
            <img className="thisbookImg" src={This_Mybook} alt="myBook" />
          </div>
          <div className="bookTextBox">
            <p className="bookText-P">
              나의 책
            </p>
            <p className="bookText-p-info">
              
            나의 책을 추가하여 <br/>
            언제든 코멘트를 달고,<br/>
            언제든 확인해보세요.<br/>
            </p>
            
          </div>
        </MainBodyDiv>
      </MainDiv>
    </>
  );
};

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  .main-header {
    height: 30%;
  }
`;

const MainBodyDiv = styled.div`
    display:flex;
   
  
    .thisbookImg{
      width:500px;
      height:300px;
      margin-top:30px;
      margin-left:10%;
    }

    .bookTextBox{
      line-height:25px;
      /* border: 1px solid black; */
      width: 300px;
      height: 200px;
      /* top: 67px; */
      z-index: -1;
      margin-top: 130px;
      background: mediumseagreen;
      margin-left:20px;
      .bookText-P {
        margin-left: 40px;
    font-size: 17px;
    font-weight: bold;
    color: white;
      }
      
      .bookText-p-info {
        padding-top:15px;
        margin-left: 40px;
        color: white;
      }
    }

`;
export default MainPage;
