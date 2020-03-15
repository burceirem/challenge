import React , {useState} from 'react';
import {Form ,FormControl} from 'react-bootstrap';


const Searchbar = ({callbackFromParent}) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState("");


    const handleChange = event => {
        
        setSearchTerm(event.target.value);
        setSort('search');
        if(searchTerm.length>1)
          callbackFromParent(searchTerm , sort);
      };

    return (
        <Form inline>
        <FormControl  type="text" placeholder="Search" className="mr-sm-2"  onChange={handleChange}  />
       </Form>
    );
};

export default Searchbar;