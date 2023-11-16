import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getLatest} from "../api/tmdb-api"
import AddToMustWatchIcon from "../components/cardIcons/mustWatchMovies";

const LatestPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('latestMovies', getLatest)

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
        title="Latest Movies"
        movies={movies}
        action={(movie) => {
          return <AddToMustWatchIcon movie={movie} />
        }}
      />
  );
};

export default LatestPage;