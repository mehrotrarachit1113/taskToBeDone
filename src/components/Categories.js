import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import '../style/Categories.css'

class Categories extends Component{
  state = {
    categories: []
  };

  componentDidMount(){
    fetch('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
    .then(res => res.json())
    .then(data => {
      this.setState({ categories: data.category_list})
    })
    .catch(error => this.setState({ error }));
  }

  render(){
    return(
      <div className = 'rootContainer'>
      <div className = 'container-fluid'>
        <h4 className="mt-4 mx-5">Our Products</h4>
        <AppBar position="static" color="default" style={{ background: '#FFFFFF', boxShadow: 'none'}}>
          <Tabs
            value={false}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            className = 'productTabs'
          >
          {this.state.categories.map(category =>{
            return(
              <div className = 'contianer-fluid'>
                <Link to ={`/${category.category_id}`} >
                <div className='container' key={category.category_id}>
                  <Tab
                    icon = {<img src={category.category_image}
                    alt={category.category_name} />}
                    style={{ borderRadius: '8px'}}
                    />
                  <div className='center text-uppercase'>{category.category_name}</div>
                </div>
                </Link>
              </div>
           )
        })}
          </Tabs>
        </AppBar>
       </div>
       </div>
    );
  }
}

export default Categories;