import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart, addItems} from '../redux/action';
import axios from 'axios';
import store from '../redux/store';
import {map, isNull, size} from 'lodash';
import bannerImg from '../images/banner.jpg';
import footerImg from '../images/footer.jpg';

import logo from '../images/logo.jpg';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  render() {
    return (<div className="container">
      <p>Dashboard</p>
    </div>)
  }

}

const mapStateToProps = (state) => {
  return {items: state.cart.items}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
