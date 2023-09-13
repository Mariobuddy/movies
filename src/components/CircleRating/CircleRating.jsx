import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { styled } from "styled-components";

const CircleRating = ({ rating ,className}) => {
  return (
    <Wrapper className={className}>
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
  .CircularProgressbar-trail {
    stroke: #b5b3b348;
  }
  .CircularProgressbar-text {
    fill: #FFFFFF !important;
    font-weight: 700;
  }

  .CircularProgressbar-background {
    fill: transparent !important;
  }
`;
