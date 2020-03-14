import React ,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Content from '../../Components/Content/Content';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Dropdown ,Form ,FormControl,Button,Navbar,Container} from 'react-bootstrap';
const Movies = ({moviesData}) => {

  const [sort, setSort] = useState("");
  const [searchData, setSearchData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
 
  
  useEffect(() => {
    let results= moviesData.filter(item =>
     item.title.toLowerCase().includes(searchTerm)
     );
     setSearchData(results);
   }, [searchTerm]);

   const handleChange = event => {
     setSearchTerm(event.target.value);
     setSort('search');
   };

   const getSortedData = (sortKey) => { 

    if(sortKey === 'yearAsc') {
       return moviesData.sort(sortYearAsc);
    }
    if(sortKey === 'yearDesc') {
     return moviesData.sort(sortYearDesc);
     }
     if(sortKey === 'titleDesc'){
       return moviesData.sort(sortTitleDesc);
     }
     if(sortKey ==='search'){
       return searchData
     }

    return moviesData.sort(sortTitleAsc);
   };

   const handleSelect = (sortKey) => {
     setSort(sortKey);

   };

   const sortTitleAsc = (a, b ) => {
     const titleA = a.title.toUpperCase();
     const titleB = b.title.toUpperCase();
     let comparison = 0;

     if (titleA > titleB) {
       comparison = 1;
     } else if (titleA < titleB) {
       comparison = -1;
     }
     return comparison;
   };

   const sortTitleDesc = (a, b ) => {
     const titleA = a.title.toUpperCase();
     const titleB = b.title.toUpperCase();
     let comparison = 0;

     if (titleA > titleB) {
       comparison = -1;
     } else if (titleA < titleB) {
       comparison = 1;
     }
     return comparison;
   };
   const sortYearAsc = (a,b) => {
       return  a.releaseYear-b.releaseYear;
    
   };

   const sortYearDesc = (a,b) => {
     return  b.releaseYear-a.releaseYear;
  
 };
 
   

return (
  <div>
       <Header/>
       <Navbar> 
        <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="titleAsc">Title Asc</Dropdown.Item>
          <Dropdown.Item eventKey="titleDesc">Title Desc</Dropdown.Item>
          <Dropdown.Item eventKey="yearAsc">Release Year Asc</Dropdown.Item> 
          <Dropdown.Item eventKey="yearDesc">Release Year Desc</Dropdown.Item> 
        </Dropdown.Menu>
      </Dropdown>
       <Form inline>
        <FormControl eventKey="search" type="text" placeholder="Search" className="mr-sm-2"  onChange={handleChange}  />
         <Button variant="outline-success">Search</Button>
      </Form>
      </Navbar>
        <Container   style = {{display: 'flex', flexDirection: 'row', maxWidth: '100%', flexWrap: 'wrap'}}> 
          {getSortedData(sort).map (  v =>  <Content key={v.title} title = {v.title} url ={v.images.PosterArt.url} /> )} 
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