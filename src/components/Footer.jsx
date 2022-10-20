import { KeyboardArrowDown } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import spotify from "./ui/spotify.png";
import facebook from "./ui/facebook.png";
import pinterest from "./ui/pinterest.png";
import instagram from "./ui/instagram.png";
import youtube from "./ui/youtube.png";
import twitter from "./ui/twitter.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnHeader = styled.div`
  display: flex;
  font-size: 20px;
  color: black;
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 20px 0;
    cursor: pointer;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const Action = styled.div`
  padding: 5px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
  }
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  font-size: 16px;
  margin: 20px 0 10px;
  color: #808080;
  cursor: pointer;
  &:hover {
    color: black;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 20px 48px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px;
  padding-top: 30px;
  border-top: 2px solid #dfdfdf;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const Media = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #dfdfdf;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: #dfdfdf;
  }
`;

const Text = styled.div`
  display: flex;
  font-size:16px
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
  margin: 0 20px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start
  padding-bottom:20px;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;

const Copyright = styled.div`
  display: flex;
  margin: 10px;
  font-size: 14px;
  color: #808080;
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <ColumnWrapper>
          <ActionWrapper>
            <ColumnHeader>About Us</ColumnHeader>
            <Action>
              <KeyboardArrowDown />
            </Action>
          </ActionWrapper>
          <Item>Our Company</Item>
          <Item>Our Coffee</Item>
          <Item>Stories and News</Item>
          <Item>Starbucks Archive</Item>
          <Item>Investor Relations</Item>
          <Item>Customer Service</Item>
        </ColumnWrapper>
        <ColumnWrapper>
          <ActionWrapper>
            <ColumnHeader>Careers</ColumnHeader>
            <Action>
              <KeyboardArrowDown />
            </Action>
          </ActionWrapper>
          <Item>Culture and Values</Item>
          <Item>Inclusion, Diversity, and Equity</Item>
          <Item>College Achivement Plan</Item>
          <Item>Alumini Community</Item>
          <Item>U.S. Careers</Item>
          <Item>International Careers</Item>
        </ColumnWrapper>
        <ColumnWrapper>
          <ActionWrapper>
            <ColumnHeader>Social Impact</ColumnHeader>
            <Action>
              <KeyboardArrowDown />
            </Action>
          </ActionWrapper>

          <Item>People</Item>
          <Item>Planet</Item>
          <Item>Environmental and Social Impact Reporting</Item>
        </ColumnWrapper>
        <ColumnWrapper>
          <ActionWrapper>
            <ColumnHeader>For Business Partners</ColumnHeader>
            <Action>
              <KeyboardArrowDown />
            </Action>
          </ActionWrapper>
          <Item>Landload Support Center</Item>
          <Item>Suppliers</Item>
          <Item>Corporate Gift Card Sales</Item>
          <Item>Office and Foodservice Coffee</Item>
        </ColumnWrapper>
        <ColumnWrapper>
          <ActionWrapper>
            <ColumnHeader>Order and Pickup</ColumnHeader>
            <Action>
              <KeyboardArrowDown />
            </Action>
          </ActionWrapper>
          <Item>Order on the App</Item>
          <Item>Order on the Web</Item>
          <Item>Delivery</Item>
          <Item>Order and Pickup Options</Item>
          <Item>Explore and Find Coffee for Home</Item>
        </ColumnWrapper>
      </Wrapper>
      <MediaWrapper>
        <Media>
          <Icon src={spotify} alt="spotify" />
        </Media>
        <Media>
          <Icon src={facebook} alt="facebook" />
        </Media>
        <Media>
          <Icon src={pinterest} alt="pinterest" />
        </Media>
        <Media>
          <Icon src={instagram} alt="instagram" />
        </Media>
        <Media>
          <Icon src={youtube} alt="youtube" />
        </Media>
        <Media>
          <Icon src={twitter} alt="twitter" />
        </Media>
      </MediaWrapper>
      <TextWrapper>
        <Text>Privacy Policy</Text> <Text>Terms of Use</Text>{" "}
        <Text>CA Supply Chain Art</Text> <Text>Cookie Preferences</Text>
      </TextWrapper>
      <Copyright>
        © 2022 Starbucks Coffee Company. All rights reserved.
      </Copyright>
    </Container>
  );
}

export default Footer;
