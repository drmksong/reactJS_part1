import React, { Component } from "react";
import "./MoviePoster.css";

class MoviePoster extends Component {
  render() {
    return <img src={this.props.img} alt={this.props.title} width="400" />;
  }
}

export default MoviePoster;
