import React from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

const Genres = ({val,className,className2}) => {
const {genres}=useSelector((state)=>state.home);
  return (
    <Wrapper className={className2}>
     {
        val?.map((val1,i)=>{
            return <span key={i} className={className}>{genres[val1]?.name}</span>
        })
     }
    </Wrapper>
  )
}

export default Genres

const Wrapper=styled.div`
`;