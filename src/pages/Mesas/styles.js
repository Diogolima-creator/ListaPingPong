import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;  
  justify-content:Center;
  background-color: #87CEEB;
  width:100vw;
  height:100vh;
  
  h1{
    margin:0px;
  }

  .Mesas-to-row{
      display:flex;
      margin-left:5px;
  }
`;

export const Header = styled.header`
  background-color: #87CEEB;
  height:40px;
  width:100%;
  padding:0px;
  display:flex;
  justify-content:center;
  font-weight:bold;
  font-size:32px;
`;

export const Button = styled.button(({ mr }) => (`
    border:2px solid yellow;
    height:50px;
    margin:5px;
    cursor:pointer;
    background-color: black;
    font-weight:bold;
    color:white;
    margin-right: ${mr}px;
    border-radius:5px;

    :hover{
      transform: scale(1.05);
      transition: .5s;
    }

    @media screen and (max-width: 426px) {
      margin-right:0px;
    }
`));

export const ButtonClose = styled.button`
    border:none;
    cursor:pointer;
    font-weight:bold;
    color:black;
`;

export const Form = styled.div`

    input{
      height:45px;
      border:1px solid yellow;
      color:white;
      background-color:black;
      margin-right:5px;
      padding-left:10px;
      outline:none;
      font-weight:bold;
    }
`;

export const List = styled.div`
    height:60vh;
    width:20vw;
    background-color:white;
    border:2px solid black;
    border-radius:10px;
    color:black;  
    overflow-y: scroll;

    @media screen and (max-width: 426px) {
      width:45vw;
      height:50vh;
      font-size:14px;
      font-weight:normal;
    }
`;

export const ListPlayer = styled.ul`
    background-color:white;
    height:100%;
    width:100%;
    list-style:none;
    margin:0px;
    padding:0px;
    border-radius:10px;

`;

export const Players = styled.li`
    color:white;
    margin:0px;
    padding:0px;
    background-color:black;
    height:30px;
    text-align:center;
    font-weight:bold;

    @media screen and (max-width: 426px) {
      height: 50px;
    }
`;

export const TableMesa = styled.div`
    margin:5px;

    @media screen and (max-width: 426px) {
      transform:scale(0.9);
    }
`;

export const TableMesaTitle = styled.h1`
    font-size:24px;
    color: #FFD700;
`;