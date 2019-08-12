import React, { Component } from 'react';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:'home'
     };
  }
  render() {
    return (
      <div className="page_home">
        <h1>{this.state.page}</h1>
      </div>
    );
  }
}

export default Home;