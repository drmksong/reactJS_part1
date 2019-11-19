import React, { Component } from "react";

import "./App.css";
import Movie from "./MovieFunc.js";

class App extends Component {
  state = {};
  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title_english}
          img={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          rating={movie.rating}
          summary={movie.summary}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({ movies: movies });
  };

  _callApi = () => {
    return fetch(
      "https://yts.lt/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        return json.data.movies;
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading..."}
      </div>
    );
  }
}

export default App;
/*
        <h1>{this.state.greeting}</h1>
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} img={movie.img} key={index} />;
        })}

*/
