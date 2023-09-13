import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import LazyLoading from "../../components/Lazy/LazyLoading";
import Genres from "../../components/Genres/Genres";
import CircleRating from "../../components/CircleRating/CircleRating";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import FallPoster from "../../assests/7718877.jpg";
import dayjs from "dayjs";
import Player from "../../assests/play.png";

const DetailBanner = ({ video, crew }) => {
  const { url } = useSelector((state) => state.home);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  let image = data?.poster_path ? url?.poster + data?.poster_path : FallPoster;
  let date = dayjs(data?.release_date);
  let genData = data?.genres?.map((val) => {
    return val.id;
  });

  let convertMinutesToHoursAndMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60); // Calculate hours
    const remainingMinutes = minutes % 60; // Calculate remaining minutes
    return { hours, minutes: remainingMinutes };
  };

  const { hours, minutes } = convertMinutesToHoursAndMinutes(data?.runtime);
  const director = crew?.filter((val) => val?.job === "Director");
  const crewLoop = crew?.filter(
    (val) =>
      val.job === "Screenplay" || val.job === "Story" || val.job === "Writer"
  );
  let poster = url?.backdrop + data?.backdrop_path;
  return (
    <Wrapper>
      <div className="imgDiv">
        <LazyLoading src={poster} />
      </div>
      {!loading ? (
        <div className="mainDiv">
          <div className="fDiv">
            <LazyLoading src={image} />
          </div>
          <div className="sDiv">
            <p className="phead">
              {data?.title ||
                data?.original_title ||
                data?.name ||
                data?.original_title}
              ({date.format("YYYY")})
            </p>
            <p className="ptag">{data?.tagline}</p>
            <Genres val={genData} className="fSend" className2="sSend" />
            <div className="cirVideo">
              <CircleRating
                rating={data?.vote_average.toFixed(1)}
                className="cSend"
              />
              <img src={Player} alt="Player" />
              <p>Watch Trailor</p>
            </div>
            <p className="pOver">Overview</p>
            <p className="pOverData">{data?.overview}</p>
            <div className="line1">
              <p>
                <span>Status : </span>
                {data?.status}
              </p>
              <p>
                <span>Release Date : </span>
                {date.format("DD MMM YYYY")}
              </p>
              <p>
                <span>Runtime : </span> {hours || 1}h {minutes || 3}m
              </p>
            </div>
            <div className="line2">
              <span className="fspa">
                Director : {director?.length === 0 ? "Adam Smith" : ""}
              </span>{" "}
              {director?.map((val, i) => {
                return (
                  <span className="sspa" key={i}>
                    {val.name}
                    {director?.length - 1 !== i ? "," : ""}
                  </span>
                );
              })}
            </div>
            <div className="line3">
              <span className="fspa">
                Writer : {crewLoop?.length === 0 ? "Martin Andrew" : ""}
              </span>
              {crewLoop?.map((val, i) => {
                return (
                  <span className="sspa" key={i}>
                    {val.name || val.original_name}
                    {crewLoop?.length - 1 !== i ? "," : ""}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="laod"></div>
      )}
    </Wrapper>
  );
};

export default DetailBanner;

const Wrapper = styled.div`
  width: 100%;
  height: 60rem;
  position: relative;
  padding-top: 10rem;
  color: #ffffff;
  position: relative;

  .imgDiv {
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .lazy-load-image-background {
      width: 100%;
      height: 100%;
      img {
        object-fit: cover;
        object-position: center;
        opacity: 0.2;
        width: 100%;
        height: 100%;
      }
    }
  }

  .cSend {
    width: 5rem;
    height: 5rem;
  }

  .fSend {
    font-size: 1.2rem;
    display: flex;
    color: #ffffff;
    width: fit-content;
    background-color: #dd1f58;
    padding: 0.4rem;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }

  .sSend {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1rem;
    width: fit-content;
  }
  .mainDiv {
    padding: 0rem 8rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .fDiv {
      .lazy-load-image-background {
        width: 100%;
        height: 100%;
        img {
          width: 28rem;
          height: 40rem;
          border-radius: 0.4rem;
        }
      }
    }

    .sDiv {
      width: 40%;
      display: flex;
      flex-direction: column;

      .phead {
        font-size: 3rem;
        font-weight: 500;
        white-space: nowrap;
      }

      .ptag {
        color: var(--dim1);
        font-size: 1.2rem;
      }
    }

    .cirVideo {
      display: flex;
      margin-top: 2rem;
      align-items: center;
      width: 45%;
      justify-content: space-between;

      p {
        font-size: 1.6rem;
        font-weight: 500;
      }
      img {
        width: 5rem;
        height: 5rem;
        cursor: pointer;
      }
    }

    .pOver {
      font-size: 2rem;
      margin-top: 1rem;
    }

    .pOverData {
      font-size: 1.2rem;
      color: var(--dim1);
      width: 90%;
    }

    .line1 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 2rem;
      position: relative;
      width: 100%;

      p {
        font-size: 1.3rem;
        color: var(--dim1);
        margin-right: 1.5rem;

        span {
          font-size: 1.4rem;
          color: #ffffff;
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        bottom: -0.5rem;
        width: 100%;
        height: 2px; /* Adjust the height as needed */
        background-color: #85818166; /* Color of the line */
      }
    }

    .line2 {
      margin-top: 2rem;
      width: fit-content;
      position: relative;
      width: 100%;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        bottom: -0.5rem;
        width: 100%;
        height: 2px; /* Adjust the height as needed */
        background-color: #85818166; /* Color of the line */
      }
      .fspa {
        font-size: 1.4rem;
      }

      .sspa {
        font-size: 1.3rem;
        color: var(--dim1);
      }
    }

    .line3 {
      margin-top: 2rem;
      width: fit-content;
      position: relative;
      width: 100%;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        bottom: -0.5rem;
        width: 100%;
        height: 2px; /* Adjust the height as needed */
        background-color: #85818166; /* Color of the line */
      }

      .fspa {
        font-size: 1.4rem;
      }

      .sspa {
        font-size: 1.3rem;
        color: var(--dim1);
      }
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    height: 100%;

    .cSend {
      width: 5rem;
      height: 5rem;
    }

    .fSend {
      font-size: 1.2rem;
      display: flex;
      color: #ffffff;
      width: fit-content;
      background-color: #dd1f58;
      padding: 0.4rem;
      border-radius: 0.4rem;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
    }

    .sSend {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 1rem;
      width: 30rem;
    }
    .mainDiv {
      padding: 0rem 3.5rem;
      align-items: flex-start;
      flex-direction: column;
      .fDiv {
        .lazy-load-image-background {
          img {
            width: 32rem;
            height: 40rem;
          }
        }
      }

      .sDiv {
        width: 40%;
        display: flex;
        flex-direction: column;

        .phead {
          font-size: 2.5rem;
          margin-top: 1rem;
        }

        .ptag {
          font-size: 1.2rem;
          white-space: nowrap;
          width: fit-content;
        }
      }

      .cirVideo {
        margin-top: 2rem;
        width: 25rem;

        p {
          font-size: 1.6rem;
        }
        img {
        }
      }

      .pOver {
        font-size: 2.5rem;
        margin-top: 2rem;
      }

      .pOverData {
        font-size: 1.2rem;
        width: 32rem;
      }

      .line1 {
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 2rem;
        width: 32rem;
        flex-direction: column;

        p {
          font-size: 1.3rem;
          margin-top: 0.5rem;

          span {
            font-size: 1.4rem;
          }
        }
      }

      .line2 {
        margin-top: 2rem;
        width: fit-content;
        width: 32rem;

        .fspa {
          font-size: 1.4rem;
        }

        .sspa {
          font-size: 1.3rem;
        }
      }

      .line3 {
        margin-top: 2rem;
        width: fit-content;
        width: 32rem;

        .fspa {
          font-size: 1.4rem;
        }

        .sspa {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
