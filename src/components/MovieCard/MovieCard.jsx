import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Fall from "../../assests/7718877.jpg";
import { useNavigate } from "react-router-dom";
import LazyLoading from "./../Lazy/LazyLoading";
import dayjs from "dayjs";
import CircleRating from "./../CircleRating/CircleRating";
import Genres from "./../Genres/Genres";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  let navigate = useNavigate();
  let { url } = useSelector((state) => state.home);
  let date = dayjs(data?.release_date || data?.first_air_date);
  let image = data?.poster_path ? url.poster + data?.poster_path : Fall;
  return (
    <Wrapper
      onClick={() => {
        navigate(`../${data?.media_type || mediaType}/${data?.id}`, {
          replace: true,
        });
      }}
    >
      <div className="fDiv">
        <div className="imgDiv1">
          <LazyLoading src={image} />
        </div>
        {!fromSearch && (
          <>
            <CircleRating
              rating={data?.vote_average?.toFixed(1)}
              className="cSend"
              text="black"
              bg="#FFFFFF"
            />
            <Genres
              val={data?.genre_ids}
              className="fSend"
              className2="sSend"
            />
          </>
        )}
      </div>
      <div className="sDiv">
        <p className="p1">{data?.title || data?.original_name}</p>
        <p>{date.format("MMMM DD, YYYY")}</p>
      </div>
    </Wrapper>
  );
};

export default MovieCard;

const Wrapper = styled.div`
  margin: 0rem 1rem 0rem 1.2rem;
  border-radius: 0.2rem;
  width: fit-content;
  cursor: pointer;
  margin-bottom: 4rem;
  margin-left: 3.8rem;

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

  @media (min-width: 390px) and (max-width: 768px) {
    margin: 0rem 1rem 0rem 1.5rem;
    border-radius: 0.2rem;
    width: fit-content;
    cursor: pointer;
    border: 2px solid transparent;
    margin-bottom: 4rem;
    margin-left: 3.5rem;
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
`;
