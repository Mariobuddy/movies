import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import No from "../../assests/NIG.png";
import LazyLoading from "../../components/Lazy/LazyLoading";
import Shimmer3 from "../../components/Shimmer/Shimmer3";

const TopCast = ({ data, load }) => {
  let { url } = useSelector((state) => state.home);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <Wrapper>
      <p className="ptop">Top Cast</p>
      {!load && data?.length > 0 ? (
        
        <div className="mainDiv">
          <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {
            data?.map((val,i)=>{
              let image=val?.profile_path?url?.profile+val?.profile_path:No;
              return <div className="innerDiv" key={i}>
                <div className="imgDiv"><LazyLoading src={image}/></div>
              <p className="pname">{val?.name || val?.original_name}</p>
              <p className="pchar">{val?.character}</p>

              </div>
            })
          }
          </Carousel>
        </div>
      ) : (
        <div className="load1">
          <Shimmer3/>
          <Shimmer3/>
          <Shimmer3/>
          <Shimmer3/>
          <Shimmer3/>
          <Shimmer3/>
        </div>
      )}
    </Wrapper>
  );
};

export default TopCast;

const Wrapper = styled.div`
padding: 2rem 20rem;
width: 100%;
height: fit-content;

.load1{
width: 100%;
height: fit-content;
display: flex;
}


.carousel-container {
    width: 100% !important;
  }

  .carousel-item {
    width: 100% !important;
  }


.ptop{
  font-size: 2rem;
  font-weight: 500;
  color: #FFFFFF;
  margin-left: 1rem;
}

.mainDiv{
  display: flex;
  margin-top: 1rem;

.innerDiv{
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0rem 1rem;
  
  .imgDiv{
    width: 15rem;
    height: 15rem;
    .lazy-load-image-background {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;

      }
    }
  }

  .pname{
   color: #FFFFFF;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 12rem;
  text-align: center;

    }
    .pchar{
  color: var(--dim1);
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 12rem;
  text-align: center;
    }
}

}
`;
