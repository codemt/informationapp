import React, { Component } from 'react';
import NavBar from './navbar';
import RegisterForm from './registerform';
import RegisterHeader from './registerheader';
export default class App extends Component {
  render() {
    return (
        <div> 
                <NavBar />
                <RegisterHeader />
                
        </div> 
    )
  }
};
