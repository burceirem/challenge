import React ,{useState ,useEffect}from "react";
import PropTypes from 'prop-types';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Content from "../../Components/Content/Content";
import { Dropdown ,Navbar} from 'react-bootstrap';
import Searchbar from '../../Components/Searchbar/Searchbar';
import '../MoviesAndSeries.css';

const Series = ({seriesData}) => {
 
    const [sort, setSort] = useState("");
    const [searchData, setSearchData] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
   
    
 const myCallback = (searchTerm , sort) => {
  setSearchTerm(searchTerm);
  setSort(sort);
 
};


    useEffect(() => {
     let results= seriesData.filter(item =>
      item.title.toLowerCase().includes(searchTerm)
      );
      setSearchData(results);
    }, [searchTerm]);

    const getSortedData = (sortKey) => { 
     if(sortKey === 'yearAsc') {
        return [].slice.call(seriesData).sort(sortYearAsc);
     }
     if(sortKey === 'yearDesc') {
        return [].slice.call(seriesData).sort(sortYearDesc);
      }
      if(sortKey === 'titleDesc'){
        return [].slice.call(seriesData).sort(sortTitleDesc);
      }
      if(sortKey ==='search'){
        return searchData
      }

     return [].slice.call(seriesData).sort(sortTitleAsc);
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
        <Navbar   data-testid="navbar" className="navbar"> 
        <Searchbar  callbackFromParent={myCallback}/>
        <Dropdown onSelect={handleSelect} className="dropdown">
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
      </Navbar>
      <div  className="content-container"> 
          {getSortedData(sort).map (  v =>  <Content key={v.title} title = {v.title} url ={v.images.PosterArt.url} /> )} 
      </div>
      <Footer/>
    </React.Fragment>);
};

Series.propTypes = {
  seriesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      programType: PropTypes.string,
      images: PropTypes.shape({}),
      releaseYear:PropTypes.number
    }),
  ).isRequired,
};

export default Series;