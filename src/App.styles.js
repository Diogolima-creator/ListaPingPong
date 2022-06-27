import styled from "styled-components";

export const Header = styled.header`
  background-color: #87CEEB;
  height:40px;
  width:100%;
  padding:10px;
  display:flex;
  justify-content:center;

`;

export const TextBold = styled.h1`
  color:black;
`;

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;  
  background-color: #87CEEB;
  width:100vw;
  height:100vh;

  h1{
    margin:0px;
  }
`;

export const Menu = styled.div`
    background-color: #87CEEB;
    height:25vh;
    width:25vw;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 426px) {
      width:200px;
      height:200px;
    }
`;

export const Button = styled.button`
    width:200px;
    height:45px;
    margin-left:10px;
    border:2px solid yellow;
    border-radius:10px;
    font-weight:bold;
    cursor:pointer;
    background-color:black;
    color:white;

    :hover{
      transform: scale(1.05);
      transition: .5s;
    }

    @media screen and (max-width: 426px) {
      width:200px;
    }
`;