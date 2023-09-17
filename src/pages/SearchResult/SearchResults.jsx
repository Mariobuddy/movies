import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/Api";
import Loading from "../../components/Spinner/Spinner";
import MovieCard from "../../components/MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Not from "../../assests/9318694.jpg";
import Shimmer from "./../../components/Shimmer/Shimmer";

const SearchResults = () => {
  const { query } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  let fetchInput = async () => {
    setLoading(true);
    try {
      let res = await fetchData(`/search/multi?query=${query}&page=${page}`);
      setData(res);
      setPage((prev) => prev + 1);
      setLoading(false);
    } catch (error) {
      return error;
    }
  };

  let nextFetch = async () => {
    try {
      let res = await fetchData(`/search/multi?query=${query}&page=${page}`);
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res?.results],
        });
      } else {
        setData(res);
      }
      setPage((prev) => prev + 1);
    } catch (error) {
      return error;
    }
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

  useEffect(() => {
    fetchInput();
  }, [query]);

  return (
    <Wrapper>
      {loading && <Loading bol={true} />}
      {!loading && data?.results ? (
        <div className="mainDiv">
          {data?.results.length > 0 ? (
            <>
              <div className="pageTitle">
                <p>
                  {`Search ${data.total_results > 1 ? "results" : "result"} of`}{" "}
                  <span
                    style={{ color: "red", fontWeight: "500" }}
                  >{`"${query}"`}</span>
                </p>
              </div>
              <InfiniteScroll
                className="mainDiv"
                dataLength={data?.results.length || []}
                next={nextFetch}
                hasMore={page <= data?.total_pages}
                loader={<Loading />}
              >
                {data?.results.map((val, i) => {
                  return <MovieCard data={val} key={i} fromSearch={true} />;
                })}
              </InfiniteScroll>
            </>
          ) : (
            <div className="notDiv">
              <img alt="Not" src={Not} />
              <span>Result Not Found...</span>
            </div>
          )}
        </div>
      ) : (
        <div className="load">
          {isMobile ? (
            <>
              <Shimmer />
              <Shimmer />
            </>
          ) : (
            <>
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
              <Shimmer />
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

export default SearchResults;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .load {
    width: 100%;
    height: 100%;
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .pageTitle {
    width: 100%;
    p {
      color: #ffffff;
      font-size: 2rem;
      text-align: center;
    }
  }

  .notDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 30rem;
      height: 35rem;
    }

    span {
      color: #ffffff;
      font-size: 2rem;
    }
  }

  .mainDiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  @media (min-width: 390px) and (max-width: 768px) {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pageTitle {
      p {
        color: #ffffff;
        font-size: 2rem;
        margin-left: 1.4rem;
      }
    }

    .notDiv {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 30rem;
        height: 35rem;
      }

      span {
        color: #ffffff;
        font-size: 2rem;
      }
    }

    .mainDiv {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 2rem;
    }
  }
`;
