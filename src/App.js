import { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
const [movies, setMovies] = useState([]);
const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=521dc45b`

  const response = await fetch(url); //calls the content of the url
  const responseJson = await response.json(); //converts the content into json

  // console.log(responseJson); //loging purposes :)
  if(responseJson.Search){
    setMovies(responseJson.Search); //send the request to the page
  }
  
}

useEffect(() => {getMovieRequest(searchValue)}, [searchValue]); //calls the movie request to be rendered on the screen

  return (
    <div className="container-fluid movie-app"> 
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Movies'></MovieListHeading>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
        </div> 
       
        <div className="row">
          <MovieList movies = {movies}></MovieList>
        </div> 
   </div>
  );
}

export default App;
