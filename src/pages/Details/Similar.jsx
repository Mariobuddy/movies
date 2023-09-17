import React from "react";
import styled from "styled-components";
import CarouselCom from "../../components/Carousel/Carousel";
import useFetch from "../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);
  let title = mediaType === "tv" ? "Similar Tv Shows" : "Similar Movies";
  return (
    <Wrapper>
      <div className="topDiv">
        <CarouselCom
          data={data}
          title={title}
          loading={loading}
          end={mediaType}
        />
      </div>
    </Wrapper>
  );
};

export default Similar;

const Wrapper = styled.div`
  height: fit-content;
  padding: 2rem 8rem;
  width: 100%;
  .topDiv {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .upperDiv {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding: 0rem 1rem;
      p {
        color: var(--dim1);
        font-size: 2.5rem;
      }
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    padding: 6rem 2rem;

    .topDiv {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .upperDiv {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 2rem;
        }
      }
    }
  }
`;
