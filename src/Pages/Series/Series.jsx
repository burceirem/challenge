import React ,{useState}from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Content from "../../Components/Content/Content";
import Container from 'react-bootstrap/Container';
import { Dropdown} from 'react-bootstrap';


const Series = ({seriesData}) => {
 
    const [sort, setSort] = useState("titleAsc");

    // const [searchTerm, setSearchTerm] = useState("");

    // const handleChange = event => {
    //   setSearchTerm(event.target.value);
    // };

    const getSortedData = (sortKey) => { 
      
      console.log(sortKey);
     if(sortKey === 'yearAsc') {
        return seriesData.sort(sortYearAsc);
     }
     if(sortKey === 'yearDesc') {
      return seriesData.sort(sortYearDesc);
      }
      if(sortKey === 'titleDesc'){
        return seriesData.sort(sortTitleDesc);
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
    <div>
        <Header/>

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
        
 
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={handleChange} />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  </Navbar> */}

        <Container   style = {{display: 'flex', flexDirection: 'row', maxWidth: '100%', flexWrap: 'wrap'}}> 
          {getSortedData(sort).map (  v =>  <Content key={v.title} title = {v.title} url ={v.images.PosterArt.url} /> )} 
        </Container>
        <Footer/>

    </div>);
};

export default Series;