import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import MoviePoster from "./MoviePoster.js";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.string
  };

  render() {
    console.log(this.props);
    return (
      <div className="Movie">
        <MoviePoster img={this.props.img} />
        <h1>{"Title is " + this.props.title}</h1>
      </div>
    );
  }
}

export default Movie;
