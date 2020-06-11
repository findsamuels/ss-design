import React, { Suspense, useEffect } from 'react';
import Layout from './Hoc/Layout/Layout'
// import Portfolio from './pages/PortFolio/Portfolio'
import './App.css';
// import Home from './pages/Home/Home'
import { Switch, Route } from 'react-router-dom';
import Loading from './Component/UI/Loading/Loading';

const Portfolio = React.lazy(() => import('./pages/PortFolio/Portfolio'))
const Home = React.lazy(() => import('./pages/Home/Home'))

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let routes;

  routes = (
    <Switch>
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/" exact component={Home} />  
    </Switch>
    )
    return (

      <div className="App">
        <Layout >
         <Suspense fallback={Loading}>{routes}</Suspense>
        </Layout>
      </div>
    );
  
  
}



export default App;
