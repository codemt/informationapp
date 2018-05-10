import React, { Component } from 'react';
import { Navbar , NavItem } from 'react-materialize';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom'
 class NavBar extends Component {
  render() {
    return (
        <div>
                <Navbar brand='Information App' right>
                <NavItem componentClass={Link} href="/userform" to="/userform">Register New </NavItem>
                <NavItem componentClass={Link} href="/clientlist" to="/clientlist">Registered Clients </NavItem>
                <NavItem href='components.html'>About US</NavItem>
            </Navbar>
      </div> 
    )
  }
};
export default NavBar;