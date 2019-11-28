import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Cart from './screens/Cart'

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact="exact" path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </div>
    </BrowserRouter>);
  }
}

export default App;
