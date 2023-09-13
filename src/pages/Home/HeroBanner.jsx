import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import LazyLoading from "../../components/Lazy/LazyLoading";

const HeroBanner = () => {
  let navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  let searchResult = (event) => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  let bg = useCallback(() => {
    try {
      let bg =
        url?.backdrop +
        data?.results[Math.floor(Math.random() * 20) + 1]?.backdrop_path;
      setBackground(bg);
    } catch (error) {
      return error;
    }
  }, [data, url]);

  useEffect(() => {
    bg();
  }, [bg]);

  return (
    <Wrapper>
      <div className="content">
        <h1>Welcome.</h1>
        <p>Millions of movies,TV shows and people to discover.Explore now.</p>
        <div className="searching">
          <input
            type="text"
            placeholder="Search for a movie or tv show..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter" && query.length > 0) {
                navigate(`/search/${query}`);
              }
            }}
          />
          <button className="buts" onClick={searchResult}>
            Search
          </button>
        </div>
      </div>
      <div className="imgDiv">
        {!loading && <LazyLoading src={background} />}
      </div>
      <div className="blur"></div>
    </Wrapper>
  );
};

export default HeroBanner;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .content {
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: var(--wcol);
      font-size: 6rem;
    }
    p {
      color: var(--dim1);
      font-size: 1.4rem;
      font-weight: 500;
    }
    .searching {
      width: 100%;
      height: 100%;
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 76%;
        padding: 1rem 1.5rem;
        border: none;
        outline: none;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
      }
      button {
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        padding: 1rem 2.5rem;
        border: none;
        color: var(--wcol);
        background-color: #ffcb43;
        cursor: pointer;
        background-image: linear-gradient(
          319deg,
          #ffcb43 0%,
          #ff6425 37%,
          #ff0016 100%
        );
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  .imgDiv {
    width: 100%;
    overflow: hidden;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;

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

  .blur {
    background: linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 79.17%);
    width: 100%;
    height: 10rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  @media (min-width: 390px) and (max-width: 768px) {
    height: 50rem;
    flex-direction: column;

    .content {
      h1 {
        font-size: 4rem;
      }
      p {
        text-align: center;
        font-size: 1.4rem;
        margin-top: 0.5rem;
      }
      .searching {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          width: 65%;
          padding: 1rem 2rem;
        }
        button {
        }
      }
    }

    .imgDiv {
      .lazy-load-image-background {
        img {
        }
      }
    }

    .blur {
    }
  }
`;
