import React from "react";
import styled, { keyframes } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer4 = () => {
  return (
    <Wrapper>
      <div className="innerDiv">
        <Skeleton className="ani imgOne" />
      </div>
    </Wrapper>
  );
};

export default Shimmer4;

const shimmer = keyframes`
  0% {
    background-color:#847d7d;
  }
  100% {
    background-color: #cdb9b9;
  }
`;

const Wrapper = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;

  .ani {
    animation: ${shimmer} 1s linear infinite;
  }

  .innerDiv {
    width: 37rem;
    height: 25rem;
    .imgOne {
      width: 37rem;
      height: 25rem;
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    .innerDiv {
      width: 31rem;
      height: 18rem;
      .imgOne {
        width: 31rem;
        height: 18rem;
      }
    }
  }
`;
