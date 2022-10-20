import { LocationOn } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import logo from "../images/starbucks.png";
import menu from "../images/menu.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  border-bottom: 2px solid #dfdfdf;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 50px;
  margin-right: 35px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Item = styled.div`
  font-size: 14px;
  margin-right: 20px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    color: #00704a;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  &:hover {
    color: #00704a;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border: 1px solid black;
  border-radius: 20px;
  font-size: 14px;
  padding: 10px 25px;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    background-color: #dfdfdf;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  padding: 10px;
  margin-right: 20px;
  &:hover {
    display: inline-block;
    background-color: #dfdfdf;
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
        <Item>Menu</Item>
        <Item>Rewards</Item>
        <Item>Gift Cards</Item>
      </LogoWrapper>
      <ButtonWrapper>
        <IconWrapper>
          <LocationOn />
          Find a store
        </IconWrapper>
        <Button color="black" bg="white">
          Sign in
        </Button>
        <Button color="white" bg="black">
          Join now
        </Button>
      </ButtonWrapper>
      <Menu src={menu} />
    </Container>
  );
}

export default Navbar;
