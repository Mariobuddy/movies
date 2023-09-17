import React from 'react';
import styled, { keyframes } from 'styled-components';
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Define the spinner styled component
const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite; /* Apply the rotation animation */
`;

function Loading({bol}) {
  return (
    <SpinnerWrapper style={{height:bol?"100vh":""}}>
      <Spinner />
    </SpinnerWrapper>
  );
}

export default Loading;

const SpinnerWrapper=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

`