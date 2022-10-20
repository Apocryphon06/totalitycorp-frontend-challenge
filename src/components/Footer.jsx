import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ColumnHeader = styled.div`
  display: flex;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Footer() {
  return <Wrapper>Footer</Wrapper>;
}

export default Footer;
