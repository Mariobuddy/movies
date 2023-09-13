import React, { useEffect } from "react";
import { fetchData } from "./utils/Api";
import { useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import SearchResults from "./pages/SearchResult/SearchResults";
import Details from "./pages/Details/Details";
import Explore from "./pages/Explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {};
  const dispatch = useDispatch();
  let apiData = async () => {
    try {
      let data = await fetchData("/configuration");
      let url = {
        backdrop: data?.images.secure_base_url + "original",
        poster: data?.images.secure_base_url + "original",
        profile: data?.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    apiData();
    genresAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const genresAll = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allPromises = {};

    endPoints.forEach((val) => {
      return promises.push(fetchData(`/genre/${val}/list`));
    });

    let data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((val) => (allPromises[val.id] = val));
    });

    dispatch(getGenres(allPromises));
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Explore />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
