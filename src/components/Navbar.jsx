import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import  { Badge }  from "@material-ui/core";
import Cart from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
margin-top: -20px;
margin-bottom: 15px;
  height: 50px;
   ${mobile({ height:"70px"})}
  `;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding:"10px 0px"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0px 5px px 5px;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display:"none"})}

`;

const Input = styled.input`
  border: none;
  ${mobile({ width:"50px"})}

`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize:"24px"})}
  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex:2,justifyContent:"center"})}

`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize:"12px",marginLeft:"10px"})}

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Anil</Logo>
        </Center>
        <Right>
          <Link to="/register">
          <MenuItem >REGISTER</MenuItem>
          </Link>
          <Link to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            <Cart />
          </Badge>
          </MenuItem>


        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
