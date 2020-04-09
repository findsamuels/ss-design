import React from 'react';
import Layout from './Hoc/Layout/Layout'
import Portfolio from './pages/PortFolio/Portfolio'
import './App.css';
import Home from './pages/Home/Home'
import { Switch, Route } from 'react-router-dom';

const App = () => {

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



export default App;
