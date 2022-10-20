import { KeyboardArrowDown } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 90vh;
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
  padding: 10px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
  }
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

function Footer() {
  return (
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
      </ColumnWrapper>
    </Wrapper>
  );
}

export default Footer;
