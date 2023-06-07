import React from 'react';
import styled, { keyframes } from 'styled-components';

const flyCycle = keyframes`
  100% {
    background-position: -900px 0;
  }
`;

const flyRightOne = keyframes`
  0% {
    transform: scale(0.3) translateX(-10vw);
  }
  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }
  // ... add all the other keyframes
`;

const BirdContainer = styled.div`
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  animation-name: ${flyRightOne};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Bird = styled.div`
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  animation-name: ${flyCycle};
  animation-timing-function: steps(10);
  animation-iteration-count: infinite;
`;

const BirdAnimation = () => (
  <div className="container">
    <h1>SVG Animated Birds</h1>
    <BirdContainer className="bird-container bird-container--one">
      <Bird className="bird bird--one" />
    </BirdContainer>
    {/* repeat for other birds */}
  </div>
);

export default BirdAnimation;
