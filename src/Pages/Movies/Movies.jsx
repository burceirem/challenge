import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Content from '../../Components/Content/Content';
import Container from 'react-bootstrap/Container';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Movies = (props) => {

  const{moviesData}= props;
 
  function compare(a, b) {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleA < titleB) {
        comparison = -1;
      }
      return comparison;
    }
    
  console.log(moviesData.sort(compare));
   

return (
  <div>
       <Header/>
        <Container   style = {{display: 'flex', flexDirection: 'row', maxWidth: '100%', flexWrap: 'wrap'}}> 
          {moviesData.map (  v =>  <Content key={v.title} title = {v.title} url ={v.images.PosterArt.url} /> )} 
        </Container>
        <Footer/>

        </div>
    
);

}
Movies.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    }),
  ).isRequired,

};
export default Movies;