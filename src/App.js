import React, { Component } from "react";

import "./App.css";
import Movie from "./Movie.js";

class App extends Component {
  state = {
    greeting: "Hello",
    movies: [
      {
        title: "Matrix",
        img:
          "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
      },
      {
        title: "Terminator 1",
        img:
          "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
      },
      {
        title: "Terminator 2",
        img:
          "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
      },
      {
        title: "Terminator Darkfate",
        img: "http://img.movist.com/?img=/x00/05/16/30_p1.jpg"
      },{
        title: "Old Boy",
        img: "https://t1.daumcdn.net/cfile/tistory/9966D933598DC60D20"
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ greeting: "Bonjour" });
    }, 3000);
    setTimeout(() => {
      this.setState({
        movies: [
          
          ...this.state.movies
        ]
      });
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.greeting}</h1>
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} img={movie.img} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
