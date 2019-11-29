import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Cart from './screens/Cart'
import Shop from './screens/Shop'
import Dashboard from './screens/Dashboard'

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact="exact" path="/" component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>);
  }
}

export default App;
