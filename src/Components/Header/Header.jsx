import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Button , Form , FormControl} from 'react-bootstrap';



const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
             <Navbar.Brand href="/">Homepage</Navbar.Brand>
      
             {/* <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Sort by year in descending order</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sort by year in ascending order</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sort by title in descending order</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sort by title in ascending order</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse> */}
</Navbar>
    );

};

export default Header;