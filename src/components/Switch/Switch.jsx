import React, { useState, useRef } from "react";
import { styled } from "styled-components";

const Switch = ({ data1, onTabChange }) => {
  const refSpan = useRef();
  const [left, setLeft] = useState(0);
  const [active, setActive] = useState(0);
  const activeTab = (tab, i) => {
    let width = refSpan.current.getBoundingClientRect().width;
    setLeft(i * width);
    setActive(i);
    onTabChange(tab, i);
  };

  return (
    <Wrapper>
      <div className="tabItems">
        {data1.map((tab, i) => {
          return (
            <span
              className={i === active ? "tabs active" : "tabs"}
              onClick={() => activeTab(tab, i)}
              key={i}
            >
              {tab}
            </span>
          );
        })}
        <span ref={refSpan} className="bgSpan" style={{ left: left }} />
      </div>
    </Wrapper>
  );
};

export default Switch;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: #ffffff;
  .tabItems {
    width: inherit;
    height: inherit;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0.4rem;

    .bgSpan {
      width: 12rem;
      height: 3rem;
      position: absolute;
      border-radius: 2rem;
      z-index: 2;
      transition: all 0.5s ease;
      background-image: linear-gradient(
        319deg,
        #ffcb43 0%,
        #ff6425 37%,
        #ff0016 100%
      );
    }

    .active {
      color: #ffffff !important;
    }

    .tabs {
      width: 12rem;
      height: 3rem;
      display: inline-flex;
      justify-content: center;
      border-radius: 2rem;
      align-items: center;
      font-size: 1.6rem;
      z-index: 3;
      cursor: pointer;
      transition: all 0.5s ease;
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    width: fit-content;
    height: fit-content;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    background-color: #ffffff;
    .tabItems {
      width: inherit;
      height: inherit;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin: 0.3rem;

      .bgSpan {
        width: 8rem;
        height: 3rem;
        position: absolute;
        border-radius: 2rem;
        z-index: 2;
        transition: all 0.5s ease;
        background-image: linear-gradient(
          319deg,
          #ffcb43 0%,
          #ff6425 37%,
          #ff0016 100%
        );
      }

      .active {
        color: #ffffff !important;
      }

      .tabs {
        width: 8rem;
        height: 3rem;
        display: inline-flex;
        justify-content: center;
        border-radius: 2rem;
        align-items: center;
        font-size: 1.4rem;
        z-index: 3;
        cursor: pointer;
        transition: all 0.5s ease;
      }
    }
  }
`;
