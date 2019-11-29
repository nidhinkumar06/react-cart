import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart, addItems} from '../redux/action';
import axios from 'axios';
import store from '../redux/store';
import {map, isNull, size} from 'lodash';
import bannerImg from '../images/banner.jpg';
import footerImg from '../images/footer.jpg';

import logo from '../images/logo.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   axios.get('https://services.odata.org/V3/OData/OData.svc/Products').then(response => {
  //     const cartData = map(response.data.value, (data) => {
  //       return {
  //         id: data.ID,
  //         title: data.Name,
  //         desc: data.Description,
  //         price: data.Price,
  //         img: data.Image || logo,
  //         discoutinuedDate: data.DiscontinuedDate,
  //         quantity: 0
  //       };
  //     });
  //     store.dispatch(addItems(cartData));
  //   }).catch(error => {
  //     console.log('Error', error);
  //   });
  // }

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  render() {
    return (<div className="container">
      <img src={bannerImg} alt="Lutosa" className="app-home-banner"/>
      <img src={footerImg} alt="Lutosa" className="app-home-banner"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
