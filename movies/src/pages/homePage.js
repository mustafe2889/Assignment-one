import React, { useEffect, useState ,createContext,useContext} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { update } from "../components/templateMovieListPage";
import PageNumContext from "../contexts/pageNumberContext.js"
import Paginator from "../components/paginator";


const HomePage = (props) => {

  const { data, error, isLoading, isError } = useQuery('discover', getMovies.bind(this,1))
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 
  console.log(props.currentP)
  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default HomePage;