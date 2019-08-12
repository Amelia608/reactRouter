import React, { Component } from 'react';
class News extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:'News'
     };
  }
  render() {
    return (
      <div className="page_news">
        <h1>
          {this.state.page}
        </h1>
      </div>
    );
  }
}

export default News;