import React, { Component } from 'react';
import {  Link } from "react-router-dom"
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:'header'
     };
  }
  render() {
    return (
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
    </ul>
    );
  }
}

export default Header;