import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import { getMovies } from "../../api/tmdb-api";
import HomePage from "../../pages/homePage";
import { queryClient } from "../..";
import Paginator from "../paginator";

export var sortMoviesBy="popularity.desc";
export var update = false;
function MovieListPageTemplate({ movies, title, action }) {
    const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [currentPage,setCurrentPage] = useState(1); 


  const handlePageClicked = (data) =>{
    setCurrentPage(data.selected)
    console.log("clicked",data.selected)


  }
  const [sortMovies, setMovieSort] = useState("")


  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    if  (type === "sort") {
      setMovieSort(value);
      sortMoviesBy=value;
      queryClient.refetchQueries();
    }
    else setGenreFilter(value);
  };

  return (
<>
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            movieSort={sortMovies}

          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
    <Paginator clickFunction = {handlePageClicked}/>
        </>
  );
}
export default MovieListPageTemplate;