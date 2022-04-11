import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class Header extends React.Component {
    render() {
      return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar example</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink exact to="/" className="nav-link">News</NavLink>
            <NavLink to="/todos" className="nav-link">ToDo lists</NavLink>
          </Nav>
        </Container>
      </Navbar>
      );
    }
  }

  export default Header;