import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTrending} from "../api/tmdb-api"
import AddTomustWatchMoviesIcon from "../components/cardIcons/mustWatchMovies";

const TrendingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('trendingMovies', getTrending)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  const mustWatchMovies = (movieId) => true 
   return (
      <PageTemplate
        title="Trending Movies"
        movies={movies}
        action={(movie) => {
          return <AddTomustWatchMoviesIcon movie={movie} />
        }}
      />
  );
};

export default TrendingPage;