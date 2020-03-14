import React ,{useState ,useEffect}from "react";
import PropTypes from 'prop-types';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Content from "../../Components/Content/Content";
import { Dropdown ,Form ,FormControl,Button,Navbar,Container} from 'react-bootstrap';


const Series = ({seriesData}) => {
 
    const [sort, setSort] = useState("");
    const [searchData, setSearchData] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
   
    useEffect(() => {
     let results= seriesData.filter(item =>
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
        return seriesData.sort(sortYearAsc);
     }
     if(sortKey === 'yearDesc') {
      return seriesData.sort(sortYearDesc);
      }
      if(sortKey === 'titleDesc'){
        return seriesData.sort(sortTitleDesc);
      }
      if(sortKey ==='search'){
        return searchData
      }

     return seriesData.sort(sortTitleAsc);
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


    
    return(
    <React.Fragment>
        <Header/>
        <Navbar  style ={{padding:'20px'}}> 
        <Form inline>
          <FormControl eventKey="search" type="text" placeholder="Search" className="mr-sm-2"  onChange={handleChange}  />
            <Button variant="outline-success">Search</Button>
        </Form>
        <Dropdown onSelect={handleSelect} style={{marginLeft:'800px'}}>
          <Dropdown.Toggle variant="success" id="dropdown-basic"> Sort</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item eventKey="titleAsc">Title Asc</Dropdown.Item>
            <Dropdown.Item eventKey="titleDesc">Title Desc</Dropdown.Item>
            <Dropdown.Item eventKey="yearAsc">Release Year Asc</Dropdown.Item> 
            <Dropdown.Item eventKey="yearDesc">Release Year Desc</Dropdown.Item> 
            </Dropdown.Menu>
          </Dropdown>
      </Navbar>
      <Container style = {{display: 'flex', flexDirection: 'row', maxWidth: '100%', flexWrap: 'wrap'}}> 
          {getSortedData(sort).map (  v =>  <Content key={v.title} title = {v.title} url ={v.images.PosterArt.url} /> )} 
      </Container>
      <Footer/>
    </React.Fragment>);
};
Series.propTypes = {
  seriesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    }),
  ).isRequired,

};
export default Series;