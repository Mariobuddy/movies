import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/Api";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loading from "../../components/Spinner/Spinner";
import Select from "react-select";
import useFetch from "../../hooks/useFetch";
import Shimmer from "../../components/Shimmer/Shimmer";
import InfiniteScroll from "react-infinite-scroll-component";

const Explore = () => {
  const { mediaType } = useParams();
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(null);
  const [genres, setGenres] = useState(null);
  const [sort, setSort] = useState(null);
  let filters = {};
  let { data: genData } = useFetch(`/genre/${mediaType}/list`);

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

  let fetchInput = async () => {
    setLoad(true);
    try {
      let res = await fetchData(`/discover/${mediaType}`, filters);
      setData(res);
      setPage((prev) => prev + 1);
      setLoad(false);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    filters = {};
    setGenres(null);
    setSort(null);
    setPage(1);
    setData(null);
    fetchInput();
  }, [mediaType]);

  let nextFetch = async () => {
    try {
      let res = await fetchData(
        `/discover/${mediaType}?&page=${page}`,
        filters
      );
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

  let onChanged = (selectedItem, action) => {
    if (action.name === "sort") {
      setSort(selectedItem);

      if (action.action !== "clear") {
        filters.sort_by = selectedItem.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenres(selectedItem);

      if (action.action !== "clear") {
        let genId = selectedItem.map((g) => g.id);
        genId = JSON.stringify(genId).slice(1, -1);
        filters.with_genres = genId;
      } else {
        delete filters.with_genres;
      }
    }

    setPage(1);
    fetchInput();
  };

  const sortData = [
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "A to Z" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #ccc",
      borderRadius: "2rem",
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFFFFF" : "white", // Change the background color as needed
      color: state.isSelected ? "#333" : "#333", // Change the text color as needed
      // Add other styles as needed
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#FFFFFF", // Change the color as needed
      // Add other styles as needed
    }),
  };

  return (
    <Wrapper>
      {load && <Loading bol={true} />}
      <div className="selection">
        <Select
          styles={customStyles}
          isMulti
          name="genres"
          value={genres}
          closeMenuOnSelect={false}
          options={genData?.genres}
          getOptionLabel={(options) => options["name"]}
          getOptionValue={(options) => options["id"]}
          onChange={onChanged}
          placeholder={"Select genres"}
          classNamePrefix={"react-select"}
          className="selectOne"
          isSearchable={true}
          isDisabled={load}
        />

        {/* <Select
          name="sort"
          styles={customStyles}
          value={sort}
          options={sortData}
          getOptionValue={(option) => option.name}
          onChange={onChanged}
          placeholder={"Sort By"}
          classNamePrefix={"react-select"}
          className="selectTwo"
          isSearchable={false}
          isDisabled={load}
        /> */}
      </div>

      {!load ? (
        <div className="mainDiv">
          <InfiniteScroll
            className="mainDiv2"
            dataLength={data?.results.length || []}
            next={nextFetch}
            hasMore={page <= data?.total_pages}
            loader={<Loading />}
          >
            {data?.results?.map((val, i) => {
              return (
                <MovieCard
                  key={i}
                  data={val}
                  mediaType={mediaType}
                  fromSearch={false}
                />
              );
            })}
          </InfiniteScroll>
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

export default Explore;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8rem;

  .load {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    flex-wrap: wrap;
    padding-left: 1.8rem;
  }

  .selection {
    display: flex;
    width: 100%;
    justify-content: flex-end;

    .selectOne {
      width: 20rem;
      margin-right: 4rem;
    }

    .selectTwo {
      width: 15rem;
      margin-right: 4rem;
    }
  }

  .react-select__control {
    cursor: pointer;
    border: 2px solid #ffffff;
    background-color: #04152d;
  }
  .react-select__single-value {
    font-size: 1.4rem;
    color: #ffffff;
    margin-left: 1.5rem;
  }

  .react-select__placeholder {
    color: #ffffff !important;
    font-size: 1.4rem;
    margin-left: 1.5rem;
  }

  .mainDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    flex-wrap: wrap;
    padding-right: 2.5rem;

    .mainDiv2 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 8rem;

    .load {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      flex-wrap: wrap;
      padding-left: 1.8rem;
    }

    .selection {
      display: flex;
      width: 100%;
      justify-content: flex-end;

      .selectOne {
        width: 20rem;
        margin-right: 3rem;
      }

      .selectTwo {
        width: 15rem;
        margin-right: 1.5rem;
      }
    }

    .react-select__control {
      cursor: pointer;
      border: 2px solid #ffffff;
      background-color: #04152d;
    }
    .react-select__single-value {
      font-size: 1.4rem;
      color: #ffffff;
      margin-left: 1.5rem;
    }

    .react-select__placeholder {
      color: #ffffff !important;
      font-size: 1.4rem;
      margin-left: 1.5rem;
    }

    .mainDiv {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      flex-wrap: wrap;
      padding-right: 2.5rem;
    }
  }
`;
