import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './component/navbar/navbar'
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/product" component={Product} />
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    )
  }
}

export default App
