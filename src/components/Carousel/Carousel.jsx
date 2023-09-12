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

const CarouselCom = ({ loading, data,end }) => {
  const navigate=useNavigate();
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
              let poster = datainner.poster_path
                ? url?.poster + datainner?.poster_path
                : fallPoster;
              let date = dayjs(
                datainner?.release_date || datainner?.first_air_date
              );
              return (
                <div key={i} className="mainDiv3" onClick={()=>navigate(`${datainner?.media_type||end}/${datainner?.id}`)}>
                  <div className="fDiv">
                    <img src={poster} alt="Rohit" />
                    <CircleRating
                      rating={datainner?.vote_average?.toFixed(1)}
                    />
                    <Genres val={datainner?.genre_ids} />
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
        img {
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
          img {
            width: 32rem;
            height: 40rem;
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
