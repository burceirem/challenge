import React from 'react';
import {Navbar} from 'react-bootstrap';
import'./Header.css';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg"className="header" >
          <Navbar.Brand href="/">Homepage</Navbar.Brand>            
        </Navbar>
    );

};

export default Header;