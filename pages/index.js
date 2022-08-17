import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie-segments";
import animationData from "../public/json/doner_hand.json";
import About from "./about.js";

export default function Main() {
  const [gray, setGray] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [sequence, setSequence] = useState({
    segments: [0, 0],
    forceFlag: true,
  });
  const handStyle = {
    width: "unset",
    height: "80%",
    position: "absolute",
    "pointer-events": "none",
    "z-index": "2",
  };
  const handAnimation = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const animate = () => {
    setSequence({
      segments: [0, 50],
      forceFlag: true,
    });
  };
  const openAbout = () => {
    setGray(current => !current);
    setShowAbout(current => !current);
  };

  return (
    <div>
      <Kebabov
        style={{
          filter: gray ? "saturate(0%) brightness(150%)" : "",
        }}
      >
        <Lottie
          options={handAnimation}
          style={handStyle}
          isClickToPauseDisabled={true}
          playSegments={sequence}
        />
        <ShavaWrapper onClick={() => animate()}>
          <Shava src={`/imgs/doner_1.gif`} />
        </ShavaWrapper>
        <Bg src={`/imgs/doner_bg.svg`} />
        <AboutButtonWrapper onClick={openAbout}>
          <AboutButton src={`/imgs/doner_about.svg`} />
        </AboutButtonWrapper>
      </Kebabov>
      {showAbout ? <About /> : null}
    </div>
  );
}

const Kebabov = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const ShavaWrapper = styled.div`
  height: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0 auto 10%;
  z-index: 1;
  cursor: default;
  &:hover {
    cursor: pointer;
  }
`;

const Shava = styled.img`
  height: 100%;
`;

const Bg = styled.img`
  height: 80%;
  position: relative;
  z-index: 0;
`;

const AboutButtonWrapper = styled.div`
  height: 12.35%;
  position: relative;
  cursor: default;
  &:hover {
    cursor: pointer;
  }
`;

const AboutButton = styled.img`
  height: 100%;
`;
