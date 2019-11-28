import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart, addItems} from '../redux/action';
import axios from 'axios';
import store from '../redux/store';
import { MdShoppingCart } from 'react-icons/md';
import { map, isNull } from 'lodash';

import logo from '../images/logo.jpg';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://services.odata.org/V3/OData/OData.svc/Products').then(response => {
      const cartData = map(response.data.value, (data) => {
        return {
          id: data.ID,
          title: data.Name,
          desc: data.Description,
          price: data.Price,
          img: logo,
          discoutinuedDate: data.DiscontinuedDate,
          quantity: 0
        };
      });
      store.dispatch(addItems(cartData));
    }).catch(error => {
      console.log('Error', error);
    });
  }

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  render() {
    let itemList = this.props.items.map(item => {
      return (<div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title}/>
          <span className="card-title">{item.title}</span>

          <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => {
              this.handleClick(item.id)
            }}>
            <i className="material-icons">shopping_cart</i>
          </span>
        </div>

        {!isNull(item.discoutinuedDate) ? (
          <div className="card-content">
            <p>Out of Stock</p>
          </div>
        ): (
          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        )}

      </div>)
    })

    return (<div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {itemList}
      </div>
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
