import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const VideoPop = ({ show, setShow, videoID, setVideoId, load, widthOne }) => {
  let del = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <Wrapper style={{ display: show ? "block" : "none" }}>
      {!load ? (
        <div className="mainDiv" onClick={del}>
          <span onClick={del}>Close</span>
          <ReactPlayer
            url={`url='https://www.youtube.com/watch?v=${videoID}'`}
            controls
            width={widthOne}
            height={"50%"}
          />
        </div>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default VideoPop;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #06060654;
  .visible {
    display: block;
  }

  .hide {
    display: none;
  }

  .mainDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    border: 2px solid transparent;

    span {
      font-size: 2rem;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
      position: relative;
      left: 31rem;
      color: #ffffff;

      &:hover {
        color: orangered;
      }
    }
  }
`;
