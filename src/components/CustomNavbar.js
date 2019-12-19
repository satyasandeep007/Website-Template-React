import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Nargiz Electric</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/"> Home </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about"> About </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/blog" to="/blog"> Blog </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/services" to="/services"> Services </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/contact" to="/contact"> Contact </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
