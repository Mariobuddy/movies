import React from "react";
import styled, { keyframes } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer2 = () => {
  return (
    <Wrapper>
      <div className="fDiv">
        <Skeleton className="imgOne ani" />
      </div>
      <div className="sDiv">
        <p className="phead">
          <Skeleton className="ani" />
        </p>
        <p className="ptag">
          <Skeleton className="ani" />
        </p>
        <div className="sSend">
          <Skeleton className="ani" />
        </div>
        <div className="cirVideo">
          <div className="cSend">
            <Skeleton className="ani" />
          </div>
          <div className="imgSee">
            <Skeleton className="ani" />
          </div>
          <p>
            <Skeleton className="ani" />
          </p>
        </div>
        <p className="pOver">Overview</p>
        <p className="pOverData">
          <Skeleton className="ani" />
        </p>
        <div className="line2">
          <span className="fspa">
            <Skeleton className="ani" />
          </span>
        </div>
        <div className="line2">
          <span className="fspa">
            <Skeleton className="ani" />
          </span>
        </div>
        <div className="line3">
          <span className="fspa">
            <Skeleton className="ani" />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Shimmer2;

const shimmer = keyframes`
  0% {
    background-color:#847d7d;
  }
  100% {
    background-color: #cdb9b9;
  }
`;

const Wrapper = styled.div`
  .ani {
    animation: ${shimmer} 1s linear infinite;
  }
  padding: 0rem 8rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  .cSend {
    width: 5rem;
    height: 5rem;
  }

  .fSend {
    font-size: 1.2rem;
    display: flex;
    color: #ffffff;
    width: fit-content;
    background-color: #dd1f58;
    padding: 0.4rem;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }

  .sSend {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1rem;
    width: fit-content;
  }
  .fDiv {
    .imgOne {
      width: 28rem;
      height: 40rem;
      border-radius: 0.4rem;
    }
  }

  .sDiv {
    width: 40%;
    display: flex;
    flex-direction: column;

    .phead {
      font-size: 3rem;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .ptag {
      color: var(--dim1);
      font-size: 1.2rem;
    }
  }

  .cirVideo {
    display: flex;
    margin-top: 2rem;
    align-items: center;
    width: 45%;
    justify-content: space-between;

    p {
      font-size: 1.6rem;
      font-weight: 500;
    }
    .imgSee {
      width: 5rem;
      height: 5rem;
      cursor: pointer;

      &:hover {
      }
    }
  }

  .pOver {
    font-size: 2rem;
    margin-top: 1rem;
  }

  .pOverData {
    font-size: 1.2rem;
    color: var(--dim1);
    width: 90%;
  }

  .line1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
    position: relative;
    width: 100%;

    p {
      font-size: 1.3rem;
      color: var(--dim1);
      margin-right: 1.5rem;

      span {
        font-size: 1.4rem;
        color: #ffffff;
      }
    }
  }

  .line2 {
    margin-top: 2rem;
    width: fit-content;
    position: relative;
    width: 100%;

    .fspa {
      font-size: 1.4rem;
    }

    .sspa {
      font-size: 1.3rem;
      color: var(--dim1);
    }
  }

  .line3 {
    margin-top: 2rem;
    width: fit-content;
    position: relative;
    width: 100%;

    .fspa {
      font-size: 1.4rem;
    }

    .sspa {
      font-size: 1.3rem;
      color: var(--dim1);
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    padding: 0rem 3.5rem;
    padding-bottom: 3rem;
    align-items: flex-start;
    flex-direction: column;

    .cSend {
      width: 5rem;
      height: 5rem;
    }

    .fSend {
      font-size: 1.2rem;
      display: flex;
      color: #ffffff;
      width: fit-content;
      background-color: #dd1f58;
      padding: 0.4rem;
      border-radius: 0.4rem;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
    }

    .sSend {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 1rem;
      width: 30rem;
    }

    .fDiv {
      .imgOne {
        width: 32rem;
        height: 40rem;
      }
    }

    .sDiv {
      width: 40%;
      display: flex;
      flex-direction: column;

      .phead {
        font-size: 2.5rem;
        margin-top: 1rem;
      }

      .ptag {
        font-size: 1.2rem;
        white-space: nowrap;
        width: fit-content;
      }
    }

    .cirVideo {
      margin-top: 2rem;
      width: 25rem;

      p {
        font-size: 1.6rem;
      }
      img {
      }
    }

    .pOver {
      font-size: 2.5rem;
      margin-top: 2rem;
    }

    .pOverData {
      font-size: 1.2rem;
      width: 32rem;
    }

    .line1 {
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 2rem;
      width: 32rem;
      flex-direction: column;

      p {
        font-size: 1.3rem;
        margin-top: 0.5rem;

        span {
          font-size: 1.4rem;
        }
      }
    }

    .line2 {
      margin-top: 2rem;
      width: fit-content;
      width: 32rem;

      .fspa {
        font-size: 1.4rem;
      }

      .sspa {
        font-size: 1.3rem;
      }
    }

    .line3 {
      margin-top: 2rem;
      width: fit-content;
      width: 32rem;

      .fspa {
        font-size: 1.4rem;
      }

      .sspa {
        font-size: 1.3rem;
      }
    }
  }
`;
