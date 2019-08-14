import React, { Component } from 'react';
import {  Link} from "react-router-dom"

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:'News',
      list:[
      	{
      		id:'1',
      		title:'新闻0001'
      	},
      	{
      		id:'2',
      		title:'新闻0002'
      	},
      	{
      		id:'3',
      		title:'新闻0003'
      	},
      	{
      		id:'4',
      		title:'新闻0004'
      	},
      	{
      		id:'5',
      		title:'新闻0005'
      	}
      ]
     };
  }
  render() {
    return (
      <div className="page_news">
        <ul>
        	{
        		this.state.list.map(el=>{
        			return (
        				<li key={el.id}>
        					<Link to={`/detail?aid=${el.id}`}>{el.title}</Link>
        				</li>
        			)
        		})
        	}
        </ul>
      
      </div>
    );
  }
}

export default News;