import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import './Homepage.css';

import { Link} from 'react-router-dom';

const HomePage = () => {
 
return (
  
  <React.Fragment>  
    <Header/>
      <div className = "box">
          <div  class="d-inline-block "> 
            <Link to='/series'>
            <Button className = "button" style ={{backgroundColor:'black'}}>
              SERIES
            </Button>
            </Link>
            <Link to='/movies'>
              <Button className = "button" style ={{backgroundColor:'black'}}>
              MOVIES
              </Button>
            </Link>
          </div>
        </div>
    <Footer/>
  </React.Fragment>
        
);

}

export default HomePage;