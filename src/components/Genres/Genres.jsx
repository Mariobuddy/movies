import React from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

const Genres = ({val}) => {
    const {genres}=useSelector((state)=>state.home);
  return (
    <Wrapper>
     {
        val?.map((val1,i)=>{
            return <span key={i} className='spa1'>{genres[val1]?.name}</span>
        })
     }
    </Wrapper>
  )
}

export default Genres

const Wrapper=styled.div`
position: absolute;
bottom: 0;
right: 0;
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: column;
.spa1{
    font-size: 1.4rem;
    display: flex;
    color: #FFFFFF;
    flex-direction: column;
    width: fit-content;
    background-color: #dd1f58;
    padding: 0.4rem;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
}

`;