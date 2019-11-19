import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import MoviePoster from "./MoviePosterFunc.js";
import LinesElipsis from "react-lines-ellipsis";

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired
};

MovieGenre.porpTypes = {
  genre: PropTypes.string.isRequired
};

function MovieGenre({ genre }) {
  return <span className="MovieGenre">{genre} </span>;
}

function Movie({ title, img, genres, rating, summary }) {
  return (
    <div className="Movie">
      <div className="MovieColumn">
        <MoviePoster img={img} />
      </div>
      <div className="MovieColumn">
        <h1>This is {title}</h1>
        <div className="MovieGenres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <p>Rating {rating}</p>
        <div className="MovieSummary">
          <LinesElipsis
            text={summary}
            maxLine="4"
            ellipsis=" ..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
}
export default Movie;
