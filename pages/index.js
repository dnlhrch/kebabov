import React, { useState, useRef } from "react";
import styled from "styled-components";
import Lottie from "react-lottie-segments";
import animationData from "../public/json/doner_hand.json";
import About from "../components/about.js";

export default function Main() {
  const [gray, setGray] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [sequence, setSequence] = useState({
    segments: [0, 0],
    forceFlag: true,
  });
  const [mouseOver, setMouseOver] = useState(false);
  const cursorRef = useRef(null);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.style = `top: ${e.clientY}px; left: ${e.clientX}px;`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorRef]);

  const handStyle = {
    width: "unset",
    height: "80%",
    position: "absolute",
    pointerEvents: "none",
    zIndex: "2",
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
  const toggleAbout = () => {
    setGray(!gray);
    setShowAbout(!showAbout);
  };

  const handleMouse = {
    onMouseEnter: () => setMouseOver(true),
    onMouseLeave: () => setMouseOver(false),
  };

  return (
    <div>
      <Cursor
        ref={cursorRef}
        src={
          !mouseOver
            ? "/imgs/doner_cursor-default.svg"
            : "/imgs/doner_cursor-pointer.svg"
        }
      />
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
        <ShavaWrapper {...handleMouse} onClick={() => animate()}>
          <Shava src={`/imgs/doner_1.gif`} />
        </ShavaWrapper>
        <Bg src={`/imgs/doner_bg.svg`} />
        <AboutButton {...handleMouse} onClick={toggleAbout}>
          <AboutImg src={`/imgs/doner_about.svg`} />
        </AboutButton>
      </Kebabov>
      {showAbout ? <About handleMouse={handleMouse} close={toggleAbout} /> : null}
    </div>
  );
}

const Cursor = styled.img`
  width: 7vw;
  height: 7vw;
  position: absolute;
  z-index: 999;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

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
  user-select: none;
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
  user-select: none;
`;

const AboutButton = styled.button`
  height: 12.35%;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  user-select: none;
`;

const AboutImg = styled.img`
  height: 100%;
`;
