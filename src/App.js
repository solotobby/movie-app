import { useState } from 'react';
import './App.css';

function App() {
const [movies, setMovies] = useState([
  {
    Title:"Sammu",
    Year:"2003",
    Type:"movie",
    Id:"0011",
    url:"https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
  },
  {
    Title:"Sammu",
    Year:"2003",
    Type:"movie",
    Id:"0013",
    url:"https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
  },
  {
    Title:"Sammu",
    Year:"2003",
    Type:"movie",
    Id:"0014",
    url:"https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
  },
  {
    Title:"Sammu",
    Year:"2003",
    Type:"movie",
    Id:"0015",
    url:"https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
  }
])
  return (
    <div className="App">
      <h1>Hello There</h1>
    </div>
  );
}

export default App;
