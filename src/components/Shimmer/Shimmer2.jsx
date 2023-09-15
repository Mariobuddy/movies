import React from 'react'
import styled,{keyframes} from 'styled-components';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer2 = () => {
  return (
    <Wrapper>
    <div className="fDiv">
            <Skeleton className='ani' width={280} height={400} />
          </div>
          <div className="sDiv">
            <p className="phead">
             <Skeleton className='ani' width={200} height={30}/>
            </p>
            <p className="ptag"><Skeleton className='ani' width={250} height={20}/></p>
            <Skeleton className='ani' width={100} height={20}/>
            <div className="cirVideo">
            <Skeleton className='ani' width={150} height={50}/>
            </div>
            <p className="pOver"><Skeleton className='ani' width={100} height={20}/></p>
            <p className="pOverData"><Skeleton className='ani' width={400} height={40}/></p>
            <div className="line1">
              <p>
              <Skeleton className='ani' width={350} height={30}/>
              </p>
            </div>
            <div className="line2">
            <Skeleton className='ani' width={100} height={30}/>
            </div>
            <div className="line3">
            <Skeleton className='ani' width={100} height={30}/>
            </div>
          </div>
    </Wrapper>
  )
}

export default Shimmer2;

const shimmer = keyframes`
  0% {
    background-color:#847d7d;
  }
  100% {
    background-color: #cdb9b9;
  }
`;

const Wrapper=styled.div`
.ani {
    animation: ${shimmer} 1s linear infinite;
  }

 padding: 0rem 8rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;