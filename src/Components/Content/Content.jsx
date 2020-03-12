import React , {FC} from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


const Content =  (props)  => {

    const { title , url } = props;

    if(typeof url == 'undefined')
        return null;

        

    return(
       <div > 
          <Card style={{ width: '200px'}}>
           <Card.Img variant="top" src={url} />
           <Card.Body>
             <Card.Text> {title} </Card.Text>
           </Card.Body>
         </Card>
         </div>
    );
};

Content.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired

};
export default Content ;