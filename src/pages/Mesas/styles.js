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
    
`;

export const TableMesa = styled.div`
    margin:5px;
`;

export const TableMesaTitle = styled.h1`
    font-size:24px;
    color: #FFD700;
`;