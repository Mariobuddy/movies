import React from "react";
import { styled } from "styled-components";
import DetailBanner from "./DetailBanner";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import TopCast from "./TopCast";
import VideoSection from "./VideoSection";
import Similar from "./Similar";
import Recom from "./Recom";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditLoad } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <Wrapper>
      <DetailBanner video={data?.results[0]} load={loading} crew={credits?.crew} />
      <TopCast data={credits?.cast} load={creditLoad}/>
      <VideoSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recom mediaType={mediaType} id={id}/>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div``;
