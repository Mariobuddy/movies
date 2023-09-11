import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { styled } from "styled-components";

const CircleRating = ({ rating }) => {
  return (
    <Wrapper>
      <CircularProgressbar
        maxValue={10}
        value={rating}
        text={rating}
        background="#FFFFFF"
        strokeWidth={10}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: "3rem",
        })}
      ></CircularProgressbar>
    </Wrapper>
  );
};

export default CircleRating;

const Wrapper = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 0;
  width: 4rem;
  height: 4rem;
  .CircularProgressbar-trail {
    stroke: #b5b3b348;
  }
  .CircularProgressbar-text {
    fill: #151414 !important;
    font-weight: 700;
  }
`;
