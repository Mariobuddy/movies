import React from "react";
import { styled } from "styled-components";
import HeroBanner from "./HeroBanner";
import Trending from "./Trending";
import TopRatings from "./TopRatings";
import Popular from "./Popular";

const Home = () => {
  return (
    <Wrapper>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRatings />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
`;
