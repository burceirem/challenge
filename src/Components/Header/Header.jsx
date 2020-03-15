import React from 'react';
import {Navbar} from 'react-bootstrap';
import'./Header.css';


const Header = () => {
    return (
      <div className="header"  data-testid="header" >
        <Navbar bg="light" >
          <Navbar.Brand href="/">Homepage</Navbar.Brand>            
        </Navbar>
        </div>
    );

};

export default Header;