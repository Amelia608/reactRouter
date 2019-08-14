import React, { Component } from 'react';
import {  Link} from "react-router-dom"

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:'News',
      list:[
      	{
      		id:'1',
      		title:'商品0001'
      	},
      	{
      		id:'2',
      		title:'商品0002'
      	},
      	{
      		id:'3',
      		title:'商品0003'
      	},
      	{
      		id:'4',
      		title:'商品0004'
      	},
      	{
      		id:'5',
      		title:'商品0005'
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
        					<Link to={`/content/${el.id}`}>{el.title}</Link>
        				</li>
        			)
        		})
        	}
        </ul>
      
      </div>
    );
  }
}

export default Products;