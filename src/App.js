import React, { Component } from 'react';
import Layout from './Hoc/Layout/Layout'
import Portfolio from './Container/PortFolio/Portfolio'
import './App.css';
import Home from './Container/Home/Home'
import { Switch, Route } from 'react-router-dom';

class App extends Component{

 


  render(){
    return (
      <div className="App">
        <Layout >
          <Switch>
         
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" exact component={Home} />
            
          </Switch>
        </Layout>
      </div>
    );
  }
  
}



export default App;
