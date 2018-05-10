import React, { Component } from 'react';
import { Navbar , NavItem } from 'react-materialize';
 class NavBar extends Component {
  render() {
    return (
        <div>
                <Navbar brand='Information App' right>
                <NavItem onClick={() => console.log('test click')}>Registered Clients</NavItem>
                <NavItem href='components.html'>About US</NavItem>
            </Navbar>
      </div> 
    )
  }
};
export default NavBar;