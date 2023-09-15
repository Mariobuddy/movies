import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import fallPoster from "../../assests/7718877.jpg";
import { useSelector } from "react-redux";
import CircleRating from "../CircleRating/CircleRating";
import Genres from "../Genres/Genres";
import dayjs from "dayjs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Shimmer from "../Shimmer/Shimmer";
import { useNavigate } from "react-router-dom";
import LazyLoading from "../Lazy/LazyLoading";

const CarouselCom = ({ loading, data, end }) => {
  const navigate = useNavigate();
  const [resShimmer, setResShimmer] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
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

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    let resizeRes = () => {
      if (window.innerWidth <= 768) {
        setResShimmer(true);
      } else {
        setResShimmer(false);
      }
    };
    window.addEventListener("resize", resizeRes);
    return () => {
      window.removeEventListener("resize", resizeRes);
    };
  }, []);
  return (
    <Wrapper>
      {!loading && data?.results?.length > 0 ? (
        <div className="mainDiv2">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            {data?.results?.map((datainner, i) => {
              let poster = datainner?.poster_path
                ? url?.poster + datainner?.poster_path
                : fallPoster;
              let date = dayjs(
                datainner?.release_date || datainner?.first_air_date
              );
              return (
                <div
                  key={i}
                  className="mainDiv3"
                  onClick={() =>
                    navigate(`${datainner?.media_type || end}/${datainner?.id}`)
                  }
                >
                  <div className="fDiv">
                    <div className="imgDiv1">
                      <LazyLoading src={poster} />
                    </div>
                    <CircleRating
                      rating={datainner?.vote_average?.toFixed(1)}
                      className="cSend"
                    />
                    <Genres
                      val={datainner?.genre_ids}
                      className="fSend"
                      className2="sSend"
                    />
                  </div>
                  <div className="sDiv">
                    <p className="p1">
                      {datainner?.title || datainner?.original_name}
                    </p>
                    <p>{date.format("MMMM DD, YYYY")}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div className="load">
          {resShimmer ? (
            <Shimmer />
          ) : (
            <>
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
            </>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default CarouselCom;

const Wrapper = styled.div`
  width: 100%;
  .cSend {
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 4rem;
    height: 4rem;
  }

  .fSend {
    font-size: 1.4rem;
    display: flex;
    color: #ffffff;
    flex-direction: column;
    width: fit-content;
    background-color: #dd1f58;
    padding: 0.4rem;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
  }

  .sSend {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
  }

  .carousel-container {
    width: 100% !important;
  }

  .carousel-item {
    width: 100% !important;
  }

  .load {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
  .mainDiv2 {
    display: flex;
    width: 100%;

    .mainDiv3 {
      margin: 0rem 1rem 0rem 1.2rem;
      border-radius: 0.2rem;
      width: fit-content;
      cursor: pointer;

      .fDiv {
        height: fit-content;
        position: relative;

        .imgDiv1 {
          width: 25rem;
          height: 35rem;
          .lazy-load-image-background {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
          }
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
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    width: 100%;

    .react-multiple-carousel__arrow--left {
      display: none;
    }
    .react-multiple-carousel__arrow--right {
      display: none;
    }

    .load {
      display: flex;
      width: 100%;
      height: fit-content;
      border: 2px solid transparent;
      overflow: hidden;
    }
    .mainDiv2 {
      display: flex;
      width: 100%;
      border: 2px solid transparent;

      .mainDiv3 {
        margin: 0rem 1rem 0rem 1.5rem;
        border-radius: 0.2rem;
        width: fit-content;
        cursor: pointer;
        border: 2px solid transparent;

        .fDiv {
          height: fit-content;
          position: relative;
          .imgDiv1 {
            width: 32rem;
            height: 37rem;
            .lazy-load-image-background {
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
              }
            }
          }
        }
        .sDiv {
          width: 25rem;
          height: fit-content;
          padding-top: 3rem;
          p {
            font-size: 1.4rem;
            color: var(--dim1);
            margin-top: 0.5rem;
          }
          .p1 {
            font-size: 1.8rem;
            font-weight: 500;
            overflow: hidden;
            color: #f3eded;
            font-family: "Roboto", sans-serif;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
`;
