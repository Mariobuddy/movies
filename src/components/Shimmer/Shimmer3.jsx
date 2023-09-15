import React from "react";
import styled, { keyframes } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer3 = () => {
  return (
    <Wrapper>
      <div className="innerDiv">
        <Skeleton width={160} className="ani" height={160} circle={true} />
      </div>
    </Wrapper>
  );
};

export default Shimmer3;

const shimmer = keyframes`
  0% {
    background-color:#847d7d;
  }
  100% {
    background-color: #cdb9b9;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  overflow: hidden;

  .ani {
    animation: ${shimmer} 1s linear infinite;
  }

  .innerDiv {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0rem 1rem;

    .imgDiv {
      width: 15rem;
      height: 15rem;
      .lazy-load-image-background {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
        }
      }
    }

    .pname {
      color: #ffffff;
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 12rem;
      text-align: center;
    }
    .pchar {
      color: var(--dim1);
      font-size: 1.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 12rem;
      text-align: center;
    }
  }
`;
