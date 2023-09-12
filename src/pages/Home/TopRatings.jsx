import React, { useState, useDeferredValue } from "react";
import { styled } from "styled-components";
import useFetch from "../../hooks/useFetch";
import CarouselCom from "../../components/Carousel/Carousel";
import Switch from "../../components/Switch/Switch";

const TopRatings = () => {
  const data1 = ["Movies", "Tv Shows"];
  const [endPoint, setEndPoint] = useState("movie");
  let onTabChange = (tabs) => {
    setEndPoint(tabs === "Movies" ? "movie" : "tv");
  };
  const { data, loading } = useFetch(`/${endPoint}/top_rated`);
  let def = useDeferredValue(data);
  return (
    <Wrapper>
      <div className="topDiv">
        <div className="upperDiv">
          <p>Top Rated</p>
          <Switch onTabChange={onTabChange} data1={data1}/>
        </div>
        <CarouselCom data={def} loading={loading} end={endPoint}/>
      </div>
    </Wrapper>
  );
};

export default TopRatings;

const Wrapper = styled.div`
  height: fit-content;
  padding: 2rem 8rem;
  width: 100%;
  .topDiv {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .upperDiv {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding: 0rem 1rem;
      p {
        color: var(--dim1);
        font-size: 2.5rem;
      }
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    padding: 6rem 2rem;

    .topDiv {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .upperDiv {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 2rem;
        }
      }
    }
  }
`;
