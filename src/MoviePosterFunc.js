import React from "react";
import "./MoviePoster.css";
import PropTypes from "prop-types";

function MoviePoster({ img }) {
  return (
    <img src={img} alt="Movie Poster" width="200" className="MoviePoster" />
  );
}

MoviePoster.prototype = {
  img: PropTypes.string.isRequired
};

export default MoviePoster;
