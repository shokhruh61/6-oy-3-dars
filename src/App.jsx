import React, { useState } from "react";
import "./App.css";
import movie from "./movie.json";
import like from "./like.png";

function App() {
  const [counter, setCounter] = useState(0);
  function clickCounter() {
    setCounter(counter + 1);
  }
  return (
    <div className="wrappers container">
      <header className="header">
        <h1 className="header-tittle">
          <button className="tittle-btn"> </button> Kino Royxati
        </h1>
        <ul>
          <li>
            <a href="#">Bosh Sahifa</a>
          </li>
          <li>
            <a href="#">Kinolar</a>
          </li>
          <li>
            <a href="#">Yangiliklar</a>
          </li>
        </ul>
        <button className="btn">
          <h6>{counter}</h6>
          <img src={like} alt="" />
          Like All
        </button>
      </header>
      <div className="app">
        <div className="movie-wrap">
          {movie.map((value) => (
            <div key={value.id} className="movie-card">
              <button className="btn">
                <img onClick={clickCounter} src={like} alt="" />
              </button>
              <img src={value.Images} alt="" id="image" />
              <h2 className="movie-card-tittle">{value.Title}</h2>
              <p className="movie-card-desc">{value.Plot}</p>
              <div className="card-center">
                <div className="card-left">
                  <h6>
                    <span>Yil:</span> <br /> {value.Year}
                  </h6>

                  <h6>
                    <span>Chiqarilgan sana:</span> <br /> {value.Released}
                  </h6>
                  <h6>
                    <span>Janr:</span> <br /> {value.Genre}
                  </h6>

                  <h6>
                    <span>Yozuvchi:</span> <br /> {value.Writer}
                  </h6>
                  <h6>
                    <span>Til:</span> <br /> {value.Language}
                  </h6>
                  <h6>
                    <span>Mukofotlar:</span> <br /> {value.Awards}
                  </h6>
                </div>
                <div className="card-right">
                  <h6>
                    <span>
                      Reyting: <br />
                    </span>
                    {value.Rated}
                  </h6>

                  <h6>
                    <span>
                      Davomiyligi: <br />
                    </span>
                    {value.Runtime}
                  </h6>

                  <h6>
                    <span>
                      Rejissor: <br />
                    </span>
                    {value.Director}
                  </h6>

                  <h6>
                    <span>
                      Aktyorlar: <br />
                    </span>
                    {value.Actors}
                  </h6>
                  <h6>
                    <span>
                      Mamlakat: <br />
                    </span>
                    {value.Country}
                  </h6>
                  <h6>
                    <span>
                      IMDb reytingi: <br />
                    </span>
                    {value.imdbRating}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
