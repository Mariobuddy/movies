import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../../assests/play.png";
import LazyLoading from "../../components/Lazy/LazyLoading";
import VideoPop from "../../components/PopVideo/VideoPop";
import Carousel from "react-multi-carousel";
import Shimmer4 from "../../components/Shimmer/Shimmer4";

const VideoSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Wrapper>
      <p className="ptop">Official Videos</p>
      {!loading && data?.results?.length > 0 ? (
        <div className="mainDiv">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            {data?.results.map((val, i) => {
              return (
                <div className="innerDiv" key={i}>
                  <div className="imgDiv">
                    <LazyLoading
                      src={`https://img.youtube.com/vi/${val?.key}/mqdefault.jpg`}
                    />
                    <img
                      className="done"
                      alt="Rohit"
                      src={Icon}
                      onClick={() => {
                        setShow(true);
                        setVideoId(val?.key);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
          <VideoPop
            load={loading}
            setShow={setShow}
            show={show}
            videoID={videoId}
            setVideoId={setVideoId}
            widthOne={"45%"}
            widthTwo={"84%"}
          />
        </div>
      ) : (
        <div className="load2">
          {isMobile ? (
            <>
              <Shimmer4 />
            </>
          ) : (
            <>
              <Shimmer4 />
              <Shimmer4 />
              <Shimmer4 />
            </>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default VideoSection;

const Wrapper = styled.div`
  position: relative;
  padding: 2rem 20rem;
  width: 100%;
  height: fit-content;

  .load2 {
    padding: 2rem 0rem;
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

  .ptop {
    font-size: 2rem;
    font-weight: 500;
    color: #ffffff;
  }

  .mainDiv {
    display: flex;
    overflow: hidden;
    margin-top: 1rem;

    .innerDiv {
      width: 37rem;
      height: 25rem;
      width: fit-content;
      height: fit-content;
      margin-right: 1rem;

      .imgDiv {
        position: relative;
        display: flex;
        .lazy-load-image-background {
          width: 100%;
          height: 100%;
          img {
            width: 37rem;
            height: 20rem;
            border-radius: 0.4rem;
          }
        }
        .done {
          width: 5rem;
          height: 5rem;
          cursor: pointer;
          z-index: 1;
          position: absolute;
          top: 35%;
          left: 43%;
        }
      }
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    position: relative;
    padding: 2rem 4rem;
    width: 100%;
    height: fit-content;
    .react-multiple-carousel__arrow--left {
      display: none;
    }
    .react-multiple-carousel__arrow--right {
      display: none;
    }

    .load2 {
      padding: 2rem 0rem;
      width: 100%;
      height: fit-content;
      display: flex;
    }

    .ptop {
      font-size: 2rem;
      font-weight: 500;
      color: #ffffff;
    }

    .mainDiv {
      display: flex;
      overflow: hidden;
      margin-top: 1.3rem;

      .innerDiv {
        width: 37rem;
        height: 25rem;
        width: fit-content;
        height: fit-content;
        margin-right: 1rem;

        .imgDiv {
          position: relative;
          display: flex;
          .lazy-load-image-background {
            width: 100%;
            height: 100%;
            img {
              width: 31rem;
              height: 18rem;
              border-radius: 0.4rem;
            }
          }
          .done {
            width: 5rem;
            height: 5rem;
            cursor: pointer;
            z-index: 1;
            position: absolute;
            top: 35%;
            left: 43%;
          }
        }
      }
    }
  }
`;
