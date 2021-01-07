import React, {Component} from 'react';
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Cart from './screens/Cart'
import Shop from './screens/Shop'
import Dashboard from './screens/Dashboard'
import Login from './screens/Login';
import {connect} from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<HashRouter>
      <div className="App">
        <Route path="/signin" component={Login} />
        {this.props.auth.isAuthenticated && <Navbar/>}
        <Switch>
          <Route exact="exact" path="/" component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/dashboard" component={Dashboard}/>
          
        </Switch>
      </div>
    </HashRouter>);
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}


export default connect(mapStateToProps)(App);
