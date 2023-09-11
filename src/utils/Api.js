import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

export const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzQ4NTA1NjJjMjkwNTcyYzM5NDU0YTU2OTY2YjMyMyIsInN1YiI6IjY0ZjZkYWFhZTBjYTdmMDBjYmU2Zjc4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8j9XqvSWeXYUBe18H1e6_eH-Bq-HxWDXaIKplaquXU";

const headers = {
  'Authorization': "bearer " + Token,
};

export const fetchData = async (url, params) => {
  try {
    let {data} = await axios.get(baseUrl + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    return error;
  }
};
