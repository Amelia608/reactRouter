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
      <ul  className="nav_list">
	      <li>
	        <Link to="/">首页</Link>
	      </li>
	      <li>
	        <Link to="/news">新闻</Link>
	      </li>
	       <li>
	        <Link to="/product">产品</Link>
	      </li>
    </ul>
    );
  }
}

export default Header;