import React from 'react';
import {Navbar} from 'react-bootstrap';
import './Footer.css';

//fixed="bottom"
const Footer = () => {

    return (
        <Navbar bg="light" sticky="bottom"  >
            <Navbar.Text> PANKOD CHALLENGE PROJECT</Navbar.Text>          
        </Navbar>

    );
};

export default Footer;