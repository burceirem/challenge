import React  from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './Content.css';

const Content =  ( { title , url })  => {

    if(typeof url == 'undefined')
        return null;
  
    return(

        <Card data-testid="card"  className="card" >
           <Card.Img variant="top" src={url} />
           <Card.Body>
             <Card.Text> {title} </Card.Text>
           </Card.Body>
        </Card>
       
    );
};

Content.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired

};
export default Content ;