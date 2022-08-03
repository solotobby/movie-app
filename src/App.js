import { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';

function App() {
const [movies, setMovies] = useState([]);

const getMovieRequest = async () => {
  const url = "http://www.omdbapi.com/?s=star wars&apikey=521dc45b"

  const response = await fetch(url); //calls the content of the url
  const responseJson = await response.json(); //converts the content into json

  console.log(responseJson); //loging purposes :)
  setMovies(responseJson.Search); //send the request to the page

}

useEffect(() => {getMovieRequest()}, []); //calls the movie request to be rendered on the screen

  return (
    <div className="container-fluid movie-app">      
        <div className="row">
          <MovieList movies = {movies}></MovieList>
        </div> 
   </div>
  );
}

export default App;
