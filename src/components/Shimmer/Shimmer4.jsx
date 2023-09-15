import React from "react";
import styled, { keyframes } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer4 = () => {
  return (
    <Wrapper>
        <div className="innerDiv">
          <Skeleton className="ani" width={370} height={250} />
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

      .imgDiv {
        position: relative;
        display: flex;
        .lazy-load-image-background {
          width: 100%;
          height: 100%;
          img {
            width: 37rem;
            height: 20rem;
            border-radius: 0.4rem;
          }
        }
        .done {
          width: 5rem;
          height: 5rem;
          cursor: pointer;
          z-index: 1;
          position: absolute;
          top: 35%;
          left: 43%;
        }
      }
    }
`;
