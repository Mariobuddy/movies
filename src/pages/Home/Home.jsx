import React from 'react'
import { styled } from 'styled-components';
import HeroBanner from './HeroBanner';
import Trending from './Trending';

const Home = () => {
  return (
    <Wrapper>
      <HeroBanner/>
      <Trending/>
    </Wrapper>
  )
}

export default Home;

const Wrapper=styled.div`
`;