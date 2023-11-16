import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlayListAddIcon from '@material-ui/icons/PlaylistAdd'

const mustWatchMovies = ({ movie }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.mustWatchMovies(movie);
  };
  return (
    <IconButton aria-label="add to mustwatch" onClick={handleAddToMustWatch} >
      <PlayListAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default mustWatchMovies;