import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {Container,Row,Col,Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './Homepage.css';



const HomePage = () => {
 
return (
  
  <React.Fragment>  
    <Header/>
  
      <Container  data-testid= "container" className = "container" >  
        <Row className="row">
          <Col xs="6"> 
            <Link to='/series'>
              <Button  data-testid="buttonSeries" className = "button" >
                SERIES
              </Button>
            </Link>
          </Col>
          <Col xs="6">
            <Link to='/movies'>
              <Button  data-testid="buttonMovies" className = "button" >
                MOVIES
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
     
    <Footer/>
  </React.Fragment>
        
);

}

export default HomePage;