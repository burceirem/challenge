import React from 'react';
import { useState ,useEffect } from 'react';
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Homepage from "./Pages/Homepage/HomePage";
import './App.css';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";


function App() {
  
  const [data , SetData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:3004/movies?_sort=title')
    .then(response => response.json())
      .then((data) => {
        SetData(data);
      
      });
    
  }, []);
  
let seriesData = data.filter(item => 
  item.programType === "series" && item.releaseYear >= 2010
 
);

seriesData = seriesData.slice(0,21);


let moviesData = data.filter(item => 
 item.programType === "movie" && item.releaseYear >= 2010
);
moviesData = moviesData.slice(0,21);
  return (
 
      <div>
        <Router>
        <Switch> 
          <Route   exact path = "/"  ><Homepage/></Route> 
          <Route  path = "/series"  component={() => <Series  seriesData = {seriesData} />}></Route> 
          <Route  path = "/movies" component={() => <Movies  moviesData = {moviesData} />}></Route>
        </Switch>
        </Router>
       </div>   
 
  );
}

export default App;
