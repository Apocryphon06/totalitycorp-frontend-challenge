import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import million from "../images/million-stars.jpg";
import rewards from "../images/rewards.jpg";
import latte from "../images/latte.jpg";
import apple from "../images/apple-yum.jpg";

const ImageContainer = styled.div`
  background-color: #${(props) => props.bg};
  width: 100%;
  height: fit-content;
  margin: 30px 0;
  display: flex;
  flex-direction: ${(props) => props.direction};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  padding: ${(props) => props.padding}px;
  width: 50%;
  height: 95%;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};
  text-align: ${(props) => props.content};
  margin: auto;
`;

const Title = styled.div`
  display: flex;
  font-size: 48px;
  color: #1e3932;
  letter-spacing: 6px;
  font-weight: bold;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 46px;
  }
`;

const Heading = styled.div`
  display: flex;
  font-size: 32px;
  color: #1e3932;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Description = styled.div`
  margin: 10px 0;
  display: flex;
  color: #1e3932;
  font-size: 24px;
  letter-spacing: 1px;
  line-height: 1.4em;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #1e3932;
  border-radius: 20px;
  font-weight: bold;
  color: #1e3932;
  margin: 10px 0;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #dfdfdf;
  }
`;

const SubHeading = styled.div`
  display: flex;
  flex-direction: column;
  color: #1e3932;
  font-size: 18px;
  letter-spacing: 1px;
  margin: 10px 5px;
`;

const ListWrapper = styled.div`
  color: #1e3932;
  font-size: 18px;
  line-height: 2em;
`;

const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  align-items: center;
  padding: 40px 0;
`;

const DisclaimerText = styled.div`
  width: 45vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  line-height: 2em;
  color: #27251f;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 1.5 em;
    width: 90vw;
  }
`;

function Home() {
  return (
    <div>
      <Navbar />
      <ImageContainer bg="d4e9e2" direction="row">
        <Image padding={0} src={million} alt="Million stars" />
        <InfoContainer align="center" content="center">
          <Title>
            {" "}
            Win a thousand <br /> Stars{" "}
          </Title>
          <Description>
            We’re giving away 1,000 Stars to 1,000 <br /> Starbucks® Rewards
            members in our Million <br /> Stars Giveaway and much more all
            week!*
          </Description>
          <Button>Play to win</Button>
        </InfoContainer>
      </ImageContainer>
      <ImageContainer bg="d4e9e2" direction="row-reverse">
        <Image padding={10} src={rewards} alt="Rewards" />
        <InfoContainer align="start" content="left">
          <Heading>A new way to earn sips and trips</Heading>
          <SubHeading>
            Now you can link your Starbucks® Rewards + Delta <br /> SkyMiles®
            accounts to get:
          </SubHeading>
          <ListWrapper>
            <ul>
              <li>150 Stars + 500 miles when you link before 12/31</li>
              <li>Double Stars on Delta travel days</li>
              <li>
                1 mile per $1 spent at Starbucks (excludes taxes and <br />{" "}
                gratuities)**
              </li>
            </ul>
          </ListWrapper>
          <Button>Link Accounts</Button>
        </InfoContainer>
      </ImageContainer>
      <ImageContainer bg="006241" direction="row">
        <Image src={latte} alt="latte" />
        <InfoContainer align="center" content="center">
          <Title
            style={{ color: "white", fontSize: "34px", letterSpacing: "4px" }}
          >
            Perfectly pumpkin
          </Title>
          <Description style={{ color: "white" }}>
            Savor the season with a Pumpkin Spice Latte <br /> or Pumpkin Cream
            Cold Brew.
          </Description>
          <Button style={{ border: "1px solid white", color: "white" }}>
            Order now
          </Button>
        </InfoContainer>
      </ImageContainer>

      <ImageContainer
        style={{ marginBottom: 0 }}
        bg="006241"
        direction="row-reverse"
      >
        <Image src={apple} alt="apple-yum" />
        <InfoContainer align="center" content="center">
          <Title
            style={{ color: "white", fontSize: "34px", letterSpacing: "2px" }}
          >
            Layers of baked apple yum
          </Title>
          <Description style={{ color: "white" }}>
            Try the Apple Crisp Oatmilk Macchiato, now <br /> nondairy and with
            Starbucks® Blonde <br /> Espresso.
          </Description>
          <Button style={{ border: "1px solid white", color: "white" }}>
            Learn more
          </Button>
        </InfoContainer>
      </ImageContainer>
      <Disclaimer>
        <DisclaimerText>
          *NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
          enter and for Official Rules, visit starbucksstardays.com.
        </DisclaimerText>
        <DisclaimerText>
          Entrants can receive a maximum of 2 entries per day.
        </DisclaimerText>

        <DisclaimerText>
          **Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. 150 Stars deposited after first qualifying
          Starbucks purchase. Flights purchased close to departure may not earn
          double Stars. Stars may not be earned on purchases of alcohol,
          Starbucks Cards and Starbucks Card reloads. For details, visit
          deltastarbucks.com/terms
        </DisclaimerText>
      </Disclaimer>
    </div>
  );
}

export default Home;
