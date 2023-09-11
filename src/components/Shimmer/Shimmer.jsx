import React from 'react'
import { styled,keyframes } from 'styled-components';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Shimmer = () => {
  return (
    <Wrapper>
          <div className="fDiv">
                    <Skeleton className='img ani' />
                  </div>
                  <div className="sDiv">
                    <p className="p1 ani">
                      {<Skeleton  className='ani'/>}
                    </p>
                    <p>{<Skeleton className='ani'/>}</p>
                  </div>
    </Wrapper>
  )
}

export default Shimmer;

const shimmer = keyframes`
  0% {
    background-color:#847d7d;
  }
  100% {
    background-color: #cdb9b9;
  }
`;

const Wrapper=styled.div`

.ani{
  animation: ${shimmer} 1s linear infinite;
}
      border-radius: 0.2rem;
      height: 43.8rem;
      width: 27.2rem;
      margin:0rem 1rem 0rem 1.2rem;

      .fDiv {
        height: fit-content;
        position: relative;
          .img {
            width: 25rem;
            height: 35rem;
          }
        }
      .sDiv {
        width: 25rem;
        height: fit-content;
        padding-top: 3rem;
        p {
          font-size: 1.2rem;
          color: var(--dim1);
          margin-top: 0.5rem;
        }
        .p1 {
          font-size: 1.6rem;
          font-weight: 500;
          overflow: hidden;
          color: #f3eded;
          font-family: "Roboto", sans-serif;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
  
`;